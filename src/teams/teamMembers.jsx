import TeamBoxes from "./teamBoxes";
import PropTypes from "prop-types";
export default function TeamMembers(props) {
  return (
    <div className="group/box w-full overflow-hidden rounded-lg font-iranSansMed shadow-md shadow-slate-300 md:w-[calc(50%-1.25rem)] lg:w-[calc(25%-1.25rem)]">
      <div className="relative z-0 flex items-center justify-center overflow-hidden">
        <img className="h-full w-full" src={props.image} alt="team-2" />
        <div className="absolute bottom-10 left-1/2 z-50 flex w-full -translate-x-1/2 items-center justify-center opacity-0 duration-300 ease-in-out group-hover/box:bottom-5 group-hover/box:opacity-100">
          <TeamBoxes />
        </div>
      </div>
      <div className="p-5">
        <p className="text-xl">{props.name}</p>
        <p className="text-slate-400">{props.job}</p>
      </div>
    </div>
  );
}
TeamMembers.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
};
