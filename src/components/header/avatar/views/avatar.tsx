import React, { useState, useEffect } from "react";
import { createAvatar } from "@dicebear/core";
import { avataaars } from "@dicebear/collection";

interface AvatarProps {
  userId: string;
}

const Avatar: React.FC<AvatarProps> = ({ userId }) => {
  const [avatarSvg, setAvatarSvg] = useState<string>("");

  useEffect(() => {
    const avatar = createAvatar(avataaars, {
      seed: userId || "default-avatar",
      size: 32,
    });
    setAvatarSvg(avatar.toString());
  }, [userId]);

  return <div dangerouslySetInnerHTML={{ __html: avatarSvg }} />;
};

export default Avatar;
