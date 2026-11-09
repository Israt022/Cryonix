
import ReleaseCard from "./Releasecard";
import ReleaseVisual from "./Releasevisual";
import type { Release } from "./changelogdata";

/** One release row: text card (left) + visual card (right), gap 24px */
const ChangelogRelease = ({ version, sections }: Release) => {
    return (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <ReleaseCard version={version} sections={sections} />
            <ReleaseVisual />
        </div>
    );
};

export default ChangelogRelease;