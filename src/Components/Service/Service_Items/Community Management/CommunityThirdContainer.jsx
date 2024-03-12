import React from "react";
function CommunityThirdContainer() {
  return (
    <div className="max-w-[1280px] sm:flex sm:flex-col sm:justify-center  mx-auto px-10 py-10">
      <div className="md:text-4xl text-3xl font-semibold my-5 py-5 primaryColor">
        Our Comprehensive Community Management Services
      </div>
      <div className="grid lg:grid-cols-3 gap-10 my-10">
        <div className="flex flex-col h-60 gap-5 py-5">
          <div>
            <div className="text-xl font-semibold primaryColor">
              Social Media Platforms
            </div>
          </div>
          <div>
            Social media platforms such as Facebook, Twitter, Instagram,
            LinkedIn, and Pinterest are popular choices for building and
            managing communities. These platforms offer features such as groups,
            pages, and hashtags that facilitate interaction and engagement among
            community members.
          </div>
        </div>

        <div className="flex flex-col h-60 gap-5 py-5">
          <div>
            <div className="text-xl font-semibold primaryColor">
              Online Forums
            </div>
          </div>
          <div>
            Dedicated online forums, such as Reddit, Quora, and niche-specific
            forums, provide a structured platform for discussions, Q&A, and
            sharing of information within a particular interest or topic area.
          </div>
        </div>

        <div className="flex flex-col h-60 gap-5 py-5">
          <div>
            <div className="text-xl font-semibold primaryColor">
              Community Management Software
            </div>
          </div>
          <div>
            There are also specialized community management software platforms,
            such as Discourse, Vanilla Forums, and Salesforce Community Cloud,
            designed specifically for managing online communities.
          </div>
        </div>

        <div className="flex flex-col h-60 gap-5 py-5">
          <div>
            <div className="text-xl font-semibold primaryColor">
              Branded Community Platforms
            </div>
          </div>
          <div>
            Some brands choose to create their own branded community platforms,
            such as forums, blogs, or membership sites, hosted on their own
            websites. These platforms offer brands full control over community
            interactions.
          </div>
        </div>

        <div className="flex flex-col h-60 gap-5 py-5">
          <div>
            <div className="text-xl font-semibold primaryColor">
              Messaging Apps
            </div>
          </div>
          <div>
            Messaging apps like WhatsApp, Slack, Discord, and Telegram can also
            be used for community management, particularly for smaller, more
            intimate communities or internal teams.
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityThirdContainer;
