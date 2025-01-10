interface ExpeCardProps {
  year: string;
  company: string;
  position: string;
}

export const ExpeCard: React.FC<ExpeCardProps> = ({company, position, year}) => {
  return (
    <div className="bg-neutral-900/50 rounded-md p-4 md:flex justify-between items-center">
      <div className="w-full md:w-1/4 text-gray-400">
        <p>{year}</p>
      </div>
      <div className="w-full md:w-2/4">
        <p className="font-semibold text-lg">{company}</p>
        <p className="text-gray-500">{position}</p>
        <p className="text-gray-600 text-[12px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit modi laboriosam  </p>
      </div>
    </div>
  );
};


