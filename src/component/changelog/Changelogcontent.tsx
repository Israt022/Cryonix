// import ChangelogHeader from "./ChangelogHeader";
// import ChangelogRelease from "./ChangelogRelease";
// import { releases } from "./changelogData";

import ChangelogHeader from "./Changelogheader";
import ChangelogRelease from "./Changelogreleas";
import { releases } from "./changelogdata";


/**
 * No container / page width here on purpose.
 * The page wrapper (app/changelog/page.tsx) already sets container-custom,
 * so adding it here would apply the side padding twice.
 */
const ChangelogContent = () => {
    return (
        <div className="flex flex-col items-center">
            <ChangelogHeader />

            {/* Gap between releases = 24px */}
            <div className="mt-24 flex w-full flex-col gap-6">
                {releases.map((release) => (
                    <ChangelogRelease key={release.version} {...release} />
                ))}
            </div>
        </div>
    );
};

export default ChangelogContent;