import React from 'react';
import icons, { IconName } from '../../../../svg/icons';

export function hasAssociatedIcon(name: string): name is IconName {
  return !!Object.keys(icons).find((key) => key === name);
}

export const SocialIcon: React.FC<{ name: string; link: string }> = ({
  name,
  link,
}) => {
  if (!hasAssociatedIcon(name)) {
    throw new Error('invalid svg name provided');
  }

  const Svg = icons[name];

  return (
    <a
      href={link}
      rel="noreferrer"
      target="_blank"
      className="px-1 transition-all duration-500 ease-in-out transform hover:scale-110 cursor-pointer"
    >
      <Svg className="w-8 h-8" />
    </a>
  );
};

export const Social: React.FC<{
  socials: { [key: string]: string };
}> = ({ socials }) => {
  return (
    <div className="flex pt-2 justify-center">
      {Object.entries(socials).map(([name, value]) => (
        <SocialIcon key={name} name={name} link={value} />
      ))}
    </div>
  );
};

export default Social;
