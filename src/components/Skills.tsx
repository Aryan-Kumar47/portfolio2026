import React from "react";

export default function Skills() {
  const skills = [
    {
      id: 1,
      name: "Nextjs",
      exp: 2,
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    },
    {
      id: 2,
      name: "Reactjs",
      exp: 2,
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    },
    {
      id: 3,
      name: "React Native",
      exp: 2,
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    },
    {
      id: 4,
      name: "Typescript",
      exp: 2,
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    },
    {
      id: 5,
      name: "Javascript",
      exp: 2,
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      id: 6,
      name: "Nodejs",
      exp: 2,
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    },
    {
      id: 7,
      name: "Mongodb",
      exp: 2,
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    },
    // {
    //   id: 8,
    //   name: "Python",
    //   exp: 2,
    //   image:
    //     "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    // },
    {
      id: 9,
      name: "MySql",
      exp: 2,
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
    },
    {
      id: 10,
      name: "Express",
      exp: 2,
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    },
  ];
  return (
    <div className="section">
      <div className="w-full container-custom medium">
        <div className="w-full pb-(--gap-padding)">
          <div className="text-cente">
            <h5>Skills</h5>
          </div>
        </div>
      </div>
      <div className="w-full container-custom">
        <div className="grid md:grid-cols-3 mx-auto gap-1 md:gap-2">
          {skills.map((skill, i) => {
            return (
              <div
                key={i}
                className="stat-segment border border-(--color-border) p-(calc(0.25rem*10)) rounded-full aspect-square flex items-center justify-center text-center"
                // style={{ backgroundImage: `url(${skill.image})` }}
              >
                <div className="flex flex-col gap-3 items-center justify-center">
                  <p className="text-3xl font-medium tracking-[-0.02em] leading-none">
                    {skill.name}
                  </p>
                  <p className="text-sm font-medium text-(--color-dark)/40">
                    {skill.exp}+ years
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
