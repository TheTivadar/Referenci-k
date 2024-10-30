import React from "react"


interface ExperienceProps {
  title: React.ReactNode;
  number: React.ReactNode;
}

interface KontenerTipus {
  id: string;
  title: string;
  body?: string;
  description?: string;
  prop1?: string;
  src?: string;
}

interface Props {
  demaszIcon: KontenerTipus[];
}


const Experience: React.FC<ExperienceProps> = ({ title, number }) => {
  return (
    <div className="relative flex justify-center items-center">
      <span className="text-gray-200 text-[150px] font-bold ">{number}</span>
      <span className="text-gray-900 text-xl font-bold absolute whitespace-nowrap">{title}</span>
    </div>
  );
};

const DemaszSzamok = ({ demaszIcon }: Props) => {
  if (!demaszIcon) return null;
  const body1 = demaszIcon.find(item => item.id === "1")?.body;
  const title1 = demaszIcon.find(item => item.id === "1")?.title;
  const body2 = demaszIcon.find(item => item.id === "2")?.body;
  const title2 = demaszIcon.find(item => item.id === "2")?.title;
  const body3 = demaszIcon.find(item => item.id === "3")?.body;
  const title3 = demaszIcon.find(item => item.id === "3")?.title;
  return (
    <div className="bg-white pb-24 sm:pb-32  sm:pt-16 relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between space-x-4">
          <Experience title={title1} number={body1} />
          <Experience title={title2} number={body2} />
          <Experience title={title3} number={body3} />
        </div>
      </div>
    </div>
  )
}
export default DemaszSzamok;