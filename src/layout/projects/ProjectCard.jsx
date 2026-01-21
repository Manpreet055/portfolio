import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProjectOverview from "./ProjectOverview.jsx";
import ProjectLinks from "./ProjectLinks.jsx";
import ProjectsTechStack from "./ProjectsTechStack.jsx";
import ProjectChallenges from "./ProjectChallenges.jsx";
import ProjectKeyfeatures from "./ProductKeyfeatures.jsx";

const ProjectCard = ({ project }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation={{
        nextEl: ".next",
        prevEl: ".prev",
      }}
      pagination={false}
      spaceBetween={20}
      slidesPerView={1}
      className="h-full shadow-effect transitions max-h-57 rounded-lg"
    >
      {/* project card */}
      <SwiperSlide>
        <ProjectOverview project={project} />
      </SwiperSlide>
      {project.keyFeatures && (
        <SwiperSlide>
          <ProjectKeyfeatures project={project} />
        </SwiperSlide>
      )}
      {project.challenges && (
        <SwiperSlide>
          <ProjectChallenges project={project} />
        </SwiperSlide>
      )}
      <SwiperSlide>
        <ProjectsTechStack project={project} />
      </SwiperSlide>
      <SwiperSlide>
        <ProjectLinks project={project} />
      </SwiperSlide>
      <button className="prev">
        <ArrowLeft size={20} />
      </button>

      <button className="next">
        <ArrowRight size={20} />
      </button>
    </Swiper>
  );
};

export default ProjectCard;
