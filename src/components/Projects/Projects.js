import React from "react";
import mixitup from "mixitup";
import { SiStyledComponents } from "react-icons/si";
import { RiRadioButtonLine } from "react-icons/ri";

import {
  SectionSubtitle,
  SectionTitle,
  Section,
} from "../../styles/GlobalComponents";
import {
  ProjectsNav,
  ProjectItem,
  ProjectsContainer,
  ProjectImageLink,
  ProjectImage,
  ProjectContent,
  ProjectSubtitle,
  ProjectTitle,
  ProjectData,
  ProjectButton,
  TechnologiesGrid,
  TechnologiesItem,
  TechnologieImage,
  ProjectLive,
  ProjectLiveIcon,
} from "./ProjectsStyles";
const Projects = (props) => {
  const projectNavLinks = document.querySelectorAll("[data-filter]");
  function activeProjectLink() {
    if (projectNavLinks) {
      projectNavLinks.forEach((link) =>
        link.classList.remove("activeProjectNavLink")
      );
      this.classList.add("activeProjectNavLink");
    }
  }

  React.useEffect(() => {
    var mixer = mixitup(".containerEl", {
      selectors: {
        target: ".content",
      },
      animation: {
        duration: 400,
      },
    });
    projectNavLinks.forEach((link) =>
      link.addEventListener("click", activeProjectLink)
    );
    return () => {
      projectNavLinks.forEach((link) =>
        link.removeEventListener("click", activeProjectLink)
      );
    };
  }, [activeProjectLink]);

  return (
    <Section id="projects">
      <SectionSubtitle>My recent projects</SectionSubtitle>
      <SectionTitle>Projects</SectionTitle>
      <ProjectsNav>
        <ProjectItem data-filter="all" className="activeProjectNavLink">
          All
        </ProjectItem>
        <ProjectItem data-filter=".frontend">Front End</ProjectItem>
        <ProjectItem data-filter=".backend">Back End</ProjectItem>
        <ProjectItem data-filter=".fullstack">Full Stack</ProjectItem>
      </ProjectsNav>
      <ProjectsContainer className="bodyGrid containerEl">
        <ProjectContent className="mix content frontend">
          <ProjectImageLink>
            <ProjectImage
              src="/images/adidas-shoes-mockups.jpg"
              alt="Website for Adidas Shoes"
            />
            <ProjectData>
              <ProjectSubtitle>Front End</ProjectSubtitle>
              <ProjectLive>
                <ProjectTitle>Latest Front End Work Made </ProjectTitle>
                <RiRadioButtonLine
                  style={{
                    fontSize: "1.75rem",
                    color: "red",
                  }}
                />
              </ProjectLive>
              <ProjectButton>View Live</ProjectButton>
              {/* <ProjectButton>View Code</ProjectButton> */}
            </ProjectData>
          </ProjectImageLink>
        </ProjectContent>
        <ProjectContent className="mix content backend">
          <ProjectImageLink>
            <ProjectImage
              src="/images/adidas-shoes-mockups.jpg"
              alt="Website for Adidas Shoes"
            />
            <ProjectData>
              <ProjectSubtitle>Back End</ProjectSubtitle>
              <ProjectTitle>Latest Back End Work Made </ProjectTitle>
              <TechnologiesGrid>
                <TechnologiesItem>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    style={{
                      width: "2.25rem",
                      height: "1.75rem",
                      alignSelf: "center",
                      paddingRight: " .5rem",
                      transform: "rotate(360deg)",
                    }}
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 256 228"
                  >
                    <path
                      d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345c.522 2.107.986 4.173 1.386 6.193zM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94zM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18zM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3zM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86z"
                      fill="#00D8FF"
                    ></path>
                  </svg>
                  React
                </TechnologiesItem>
                <TechnologiesItem>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    style={{
                      width: "2.25rem",
                      height: "1.75rem",
                      alignSelf: "center",
                      paddingRight: " .5rem",
                      transform: "rotate(360deg)",
                    }}
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 256 228"
                  >
                    <defs>
                      <linearGradient
                        x1="-2.778%"
                        y1="32%"
                        x2="100%"
                        y2="67.556%"
                        id="IconifyId-17a33f6abcb-f037ab-0"
                      >
                        <stop stopColor="#2298BD" offset="0%"></stop>
                        <stop stopColor="#0ED7B5" offset="100%"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="M128 0C93.867 0 72.533 17.067 64 51.2C76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z"
                      fill="url(#IconifyId-17a33f6abcb-f037ab-0)"
                    ></path>
                  </svg>
                  Tailwind
                </TechnologiesItem>
                <TechnologiesItem>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    style={{
                      width: "2.25rem",
                      height: "1.75rem",
                      alignSelf: "center",
                      paddingRight: " .5rem",
                      transform: "rotate(360deg)",
                    }}
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 512 309"
                  >
                    <path
                      d="M120.81 80.561h96.568v7.676h-87.716v57.767h82.486v7.675h-82.486v63.423h88.722v7.675H120.81V80.561zm105.22 0h10.26l45.467 63.423L328.23 80.56L391.441 0l-103.85 150.65l53.515 74.127h-10.663l-48.686-67.462l-48.888 67.462h-10.461l53.917-74.128l-50.296-70.088zm118.898 7.676V80.56h110.048v7.676h-50.699v136.54h-8.852V88.237h-50.497zM0 80.56h11.065l152.58 228.323l-63.053-84.107L9.254 91.468l-.402 133.31H0V80.56zm454.084 134.224c-1.809 0-3.165-1.4-3.165-3.212c0-1.81 1.356-3.212 3.165-3.212c1.83 0 3.165 1.401 3.165 3.212c0 1.811-1.335 3.212-3.165 3.212zm8.698-8.45h4.737c.064 2.565 1.937 4.29 4.693 4.29c3.079 0 4.823-1.854 4.823-5.325v-21.99h4.823v22.011c0 6.252-3.617 9.853-9.603 9.853c-5.62 0-9.473-3.493-9.473-8.84zm25.384-.28h4.78c.409 2.953 3.294 4.828 7.45 4.828c3.875 0 6.717-2.005 6.717-4.764c0-2.371-1.809-3.794-5.921-4.764l-4.005-.97c-5.62-1.316-8.181-4.032-8.181-8.602c0-5.54 4.521-9.227 11.303-9.227c6.308 0 10.916 3.686 11.196 8.925h-4.694c-.452-2.867-2.95-4.657-6.567-4.657c-3.81 0-6.35 1.833-6.35 4.635c0 2.22 1.635 3.493 5.683 4.441l3.423.841c6.373 1.488 9 4.075 9 8.753c0 5.95-4.607 9.68-11.97 9.68c-6.89 0-11.52-3.558-11.864-9.12z"
                      fill="#000"
                    ></path>
                  </svg>
                  <span>NextJS</span>
                </TechnologiesItem>
                <TechnologiesItem>
                  <SiStyledComponents
                    style={{
                      width: "2.25rem",
                      height: "1.75rem",
                      alignSelf: "center",
                      paddingRight: " .5rem",
                      transform: "rotate(360deg)",
                    }}
                  />
                  Styled
                </TechnologiesItem>
              </TechnologiesGrid>
              <ProjectButton>View Live</ProjectButton>
              {/* <ProjectButton>View Code</ProjectButton> */}
            </ProjectData>
          </ProjectImageLink>
        </ProjectContent>
        <ProjectContent className="mix content fullstack">
          <ProjectImageLink>
            <ProjectImage
              src="/images/adidas-shoes-mockups.jpg"
              alt="Website for Adidas Shoes"
            />
            <ProjectData>
              <ProjectSubtitle>Full Stack</ProjectSubtitle>
              <ProjectTitle>Latest Full Stack Work Made </ProjectTitle>
              <ProjectButton>View Live</ProjectButton>
              {/* <ProjectButton>View Code</ProjectButton> */}
            </ProjectData>
          </ProjectImageLink>
        </ProjectContent>
      </ProjectsContainer>
    </Section>
  );
};
export default Projects;
