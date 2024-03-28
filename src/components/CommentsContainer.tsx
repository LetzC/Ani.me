"use client";

import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import databaseUsers from "../../database-users.json";
import databaseComments from "../../database-comments.json";
import Button from "./Button";
import Comment from "./Comment";

interface User {
  id: number;
  username: string;
  email: string;
  urlProfilePicture: string;
}

const CommentsContainer = ({ animeId }: { animeId: number }) => {
  const isSmall = useMediaQuery({ query: "(max-width: 768px)" });
  const [visibleComments, setVisibleComments] = useState(isSmall ? 2 : 4);

  const filteredCommentsDatabase = databaseComments.filter(
    (comment) => comment.animeId === animeId
  );

  function getUser(id: number): User | undefined {
    return databaseUsers.find((user) => user.id === id);
  }

  const renderComments = () => {
    const commentsToRender = filteredCommentsDatabase.slice(0, visibleComments);
    return commentsToRender.map((comment, index) => {
      const user = getUser(comment.userId);

      if (user) {
        return (
          <section key={index}>
            <Comment user={user} comment={comment} />

            {index !== commentsToRender.length - 1 && (
              <div className="w-full h-px bg-dark-bluish-gray my-4 2xl:my-8"></div>
            )}
          </section>
        );
      }
      return null;
    });
  };

  const handleShowMoreComments = () => {
    setVisibleComments((prevCount) =>
      Math.min(prevCount + 4, filteredCommentsDatabase.length)
    );
  };

  return (
    <div>
      {renderComments()}
      {filteredCommentsDatabase.length > visibleComments && (
        <div className="my-12 2xl:w-3/6 mx-auto">
          <Button
            onClickFunction={() => handleShowMoreComments()}
            fullWidth={true}
          >
            Ver Mais
          </Button>
        </div>
      )}
      {filteredCommentsDatabase.length === 0 && (
        <h6 className="text-[#BFBFBF]">Sem comentários</h6>
      )}
    </div>
  );
};

export default CommentsContainer;
