interface ExpeCardProps {
  year: string;
  company: string;
  position: string;
}

export const ExpeCard: React.FC<ExpeCardProps> = ({company, position, year}) => {
  return (
    <div className="bg-neutral-900/50 rounded-md p-4 flex justify-between items-center">
      <div className="text-gray-400">
        <p> {year}</p>
      </div>
      <div>
        <p className="font-semibold text-lg">{company}</p>
        <p className="text-gray-500">{position}</p>
      </div>
    </div>
  );
};


