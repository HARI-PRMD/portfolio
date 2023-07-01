import ProjectCard from "./ProjectCard";

const AllProjects = () => {
  // TODO: Month sticky scrolls

  return (
    <div className="fr z-0 h-full">
      <div className="h-full space-y-8 overflow-auto py-16">
        <div>
          <p className="p-main sticky top-0">2023</p>
          <div className="-translate-y-8 space-y-8 pl-32">
            <ProjectCard
              title="MegaLAN Quests"
              description="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus vitae
  porta urna. Sed faucibus felis id rhoncus finibus. Ut efficitur
  felis vel libero venenatis, vel pellentesque leo hendrerit.
  Donec auctor semper sem, eget auctor massa auctor eget."
              month="December"
              websiteLink="http://localhost:3000/"
              codeLink="http://localhost:3000/"
            />
            <ProjectCard
              title="MegaLAN Quests"
              description="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus vitae
  porta urna. Sed faucibus felis id rhoncus finibus. Ut efficitur
  felis vel libero venenatis, vel pellentesque leo hendrerit.
  Donec auctor semper sem, eget auctor massa auctor eget."
              month="December"
              websiteLink="http://localhost:3000/"
              codeLink="http://localhost:3000/"
            />
          </div>
        </div>
        <div>
          <p className="p-main sticky top-0">2022</p>
          <div className="-translate-y-8 space-y-8 pl-32">
            <ProjectCard
              title="MegaLAN Quests"
              description="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus vitae
  porta urna. Sed faucibus felis id rhoncus finibus. Ut efficitur
  felis vel libero venenatis, vel pellentesque leo hendrerit.
  Donec auctor semper sem, eget auctor massa auctor eget."
              month="December"
              websiteLink="http://localhost:3000/"
              codeLink="http://localhost:3000/"
            />
            <ProjectCard
              title="MegaLAN Quests"
              description="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus vitae
  porta urna. Sed faucibus felis id rhoncus finibus. Ut efficitur
  felis vel libero venenatis, vel pellentesque leo hendrerit.
  Donec auctor semper sem, eget auctor massa auctor eget."
              month="December"
              websiteLink="http://localhost:3000/"
              codeLink="http://localhost:3000/"
            />
          </div>
        </div>
        <div>
          <p className="p-main sticky top-0">2021</p>
          <div className="-translate-y-8 space-y-8 pl-32">
            <ProjectCard
              title="MegaLAN Quests"
              description="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus vitae
  porta urna. Sed faucibus felis id rhoncus finibus. Ut efficitur
  felis vel libero venenatis, vel pellentesque leo hendrerit.
  Donec auctor semper sem, eget auctor massa auctor eget."
              month="December"
              websiteLink="http://localhost:3000/"
              codeLink="http://localhost:3000/"
            />
            <ProjectCard
              title="MegaLAN Quests"
              description="Lorem ipsum dolor sit amet, adipiscing elit. Phasellus vitae
  porta urna. Sed faucibus felis id rhoncus finibus. Ut efficitur
  felis vel libero venenatis, vel pellentesque leo hendrerit.
  Donec auctor semper sem, eget auctor massa auctor eget."
              month="December"
              websiteLink="http://localhost:3000/"
              codeLink="http://localhost:3000/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllProjects;
