import React from 'react';
import { SocialIcon } from './SocialIcon';

interface SocialLinksProps {
  githubUrl: string;
  linkedinUrl: string;
  salesforceUrl: string;
  twitterUrl?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  githubUrl,
  linkedinUrl,
  salesforceUrl,
  twitterUrl
}) => {
  return (
    <div className="flex justify-center w-full mb-8">
      <div className="flex gap-4 bg-gray-100 px-6 py-3 rounded-full hover:bg-gray-200 transition-colors">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          <SocialIcon type="github" />
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          <SocialIcon type="linkedin" />
        </a>
        <a
          href={salesforceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          <SocialIcon type="salesforce" />
        </a>
        {twitterUrl && (
          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <SocialIcon type="twitter" />
          </a>
        )}
      </div>
    </div>
  );
};
