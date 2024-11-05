import React from "react";

import {
  siJavascript,
  siHtml5,
  siCss3,
  siReact,
  siVuedotjs,
  siSolid,
  siQwik,
  siSvelte,
  siNodedotjs,
  siReactquery,
  siNextdotjs,
  siNuxtdotjs,
  siEslint,
  siMongodb,
  siMysql,
  siPostgresql,
  siPython,
  siFlask,
  siGooglecloud,
  siCloudflare,
  siGithub,
  siJenkins,
  siRabbitmq,
  siReactrouter,
  siRedux,
  siStorybook,
  siWebpack,
  siNestjs,
  siGitlab,
  siDocker,
  siKubernetes,
  siAwslambda,
  siAwsamplify,
  siHeroku,
  siNetlify,
  siVercel,
  siChromatic,
  siTestinglibrary,
  siGraphql,
  siHasura,
  siApachekafka,
  siPrometheus,
  siFirebase,
  siOpenai,
  siExpo,
  siIonic,
} from "simple-icons";

const technologies = [
  { icon: siReactrouter, name: "ReactRouter", url: "https://reactrouter.com" },
  { icon: siRedux, name: "Redux", url: "https://redux.js.org" },
  { icon: siStorybook, name: "Storybook", url: "https://storybook.js.org" },
  { icon: siWebpack, name: "Webpack", url: "https://webpack.js.org" },
  { icon: siNestjs, name: "NestJs", url: "https://nestjs.com" },
  {
    icon: siJavascript,
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: siHtml5,
    name: "HTML5",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: siCss3,
    name: "CSS3",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  { icon: siReact, name: "React", url: "https://react.dev" },
  { icon: siVuedotjs, name: "Vue", url: "https://vuejs.org" },
  { icon: siSolid, name: "SolidJS", url: "https://www.solidjs.com" },
  { icon: siQwik, name: "QwikJS", url: "https://qwik.builder.io" },
  { icon: siSvelte, name: "SvelteJS", url: "https://svelte.dev" },
  { icon: siNodedotjs, name: "NodeJS", url: "https://nodejs.org" },
  { icon: siDocker, name: "Docker", url: "https://www.docker.com" },
  { icon: siKubernetes, name: "Kubernetes", url: "https://kubernetes.io" },
  { icon: siReactquery, name: "ReactQuery", url: "https://tanstack.com/query" },
  { icon: siNextdotjs, name: "NextJS", url: "https://nextjs.org" },
  { icon: siNuxtdotjs, name: "NuxtJS", url: "https://nuxt.com" },
  { icon: siEslint, name: "ES6", url: "https://tc39.es/ecma262/" },
  { icon: siMongodb, name: "MongoDB", url: "https://www.mongodb.com" },
  { icon: siMysql, name: "MySQL", url: "https://www.mysql.com" },
  { icon: siPostgresql, name: "PostgreSQL", url: "https://www.postgresql.org" },
  { icon: siPython, name: "Python", url: "https://www.python.org" },
  { icon: siFlask, name: "Flask", url: "https://flask.palletsprojects.com" },
  { icon: siGitlab, name: "GitLab", url: "https://gitlab.com" },
  { icon: siGooglecloud, name: "GCP", url: "https://cloud.google.com" },
  { icon: siCloudflare, name: "Cloudflare", url: "https://www.cloudflare.com" },
  { icon: siGithub, name: "GitHub", url: "https://github.com" },
  { icon: siJenkins, name: "Jenkins", url: "https://www.jenkins.io" },
  { icon: siRabbitmq, name: "RabbitMQ", url: "https://www.rabbitmq.com" },
  {
    icon: siAwslambda,
    name: "AWS Lambda",
    url: "https://aws.amazon.com/lambda/",
  },
  {
    icon: siAwsamplify,
    name: "AWS Amplify",
    url: "https://aws.amazon.com/amplify/",
  },
  { icon: siHeroku, name: "Heroku", url: "https://www.heroku.com" },
  { icon: siNetlify, name: "Netlify", url: "https://www.netlify.com" },
  { icon: siVercel, name: "Vercel", url: "https://vercel.com" },
  { icon: siChromatic, name: "Chromatic", url: "https://www.chromatic.com" },
  {
    icon: siTestinglibrary,
    name: "Testing Library",
    url: "https://testing-library.com",
  },
  { icon: siGraphql, name: "GraphQL", url: "https://graphql.org" },
  { icon: siHasura, name: "Hasura", url: "https://hasura.io" },
  { icon: siApachekafka, name: "Kafka", url: "https://kafka.apache.org" },
  { icon: siPrometheus, name: "Prometheus", url: "https://prometheus.io" },
  { icon: siFirebase, name: "Firebase", url: "https://firebase.google.com" },
  { icon: siOpenai, name: "OpenAI", url: "https://openai.com" },

  { icon: siExpo, name: "Expo", url: "https://expo.dev" },
  { icon: siIonic, name: "Ionic", url: "https://ionicframework.com" },
];

const TechIcon: React.FC<{ icon: SimpleIcons.SimpleIcon; url: string }> = ({
  icon,
  url,
}) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer"
  >
    <svg
      role="img"
      viewBox="0 0 24 24"
      className="w-8 h-8 text-gray-400 group-hover:text-gray-900 group-hover:transition-colors duration-300"
      fill="currentColor"
    >
      <path d={icon.path} />
    </svg>
  </a>
);

export const TechMarquee = () => {
  return (
    <div className="w-full overflow-hidden  py-12">
      <div className="relative flex flex-col gap-8">
        {/* First Marquee */}
        <div className="hover:pause-animation flex whitespace-nowrap animate-marquee-left">
          <div className="flex gap-12 items-center px-4">
            {technologies.map((tech, index) => (
              <div
                key={`${tech.name}-1-${index}`}
                className="flex flex-col items-center group transition-all duration-300"
              >
                <TechIcon icon={tech.icon} url={tech.url} />
                <span className="text-xs mt-2 text-gray-500 group-hover:text-gray-950 transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
            {technologies.map((tech, index) => (
              <div
                key={`${tech.name}-2-${index}`}
                className="flex flex-col items-center group transition-all duration-300"
              >
                <TechIcon icon={tech.icon} url={tech.url} />
                <span className="text-xs mt-2 text-gray-500 group-hover:text-gray-950 transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Second Marquee */}
        <div className="hover:pause-animation flex whitespace-nowrap animate-marquee-right">
          <div className="flex gap-12 items-center px-4">
            {[...technologies].reverse().map((tech, index) => (
              <div
                key={`${tech.name}-3-${index}`}
                className="flex flex-col items-center group transition-all duration-300"
              >
                <TechIcon icon={tech.icon} url={tech.url} />
                <span className="text-xs mt-2 text-gray-500 group-hover:text-gray-950 transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
            {[...technologies].reverse().map((tech, index) => (
              <div
                key={`${tech.name}-4-${index}`}
                className="flex flex-col items-center group transition-all duration-300"
              >
                <TechIcon icon={tech.icon} url={tech.url} />
                <span className="text-xs mt-2 text-gray-500 group-hover:text-gray-950 transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
