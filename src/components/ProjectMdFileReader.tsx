import { useEffect, useState } from "react";
import md01 from "../markdownFiles/2013-01-esail.md";
import md02 from "../markdownFiles/2013-10-sism.md";
import md03 from "../markdownFiles/2016-03-egovcommittee.md";
import md04 from "../markdownFiles/2017-01-adzip.md";
import md05 from "../markdownFiles/2017-10-plugin.md";
import md06 from "../markdownFiles/2019-09-minwiseservices.md";
import md07 from "../markdownFiles/2019-10-walhouse.md";
import md08 from "../markdownFiles/2020-11-aptcare.md";
import md09 from "../markdownFiles/2022-05-msaecomms.md";
import md10 from "../markdownFiles/2023-02-toyseoulparks.md";
import md11 from "../markdownFiles/2023-04-hdmscamel.md";
import md12 from "../markdownFiles/2024-01-historybook.md";
import TimelineContentProjectCard from "./TimelineContentProjectCard";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";

function ProjectMdFileReader() {
  const mdFiles = [
    md01,
    md02,
    md03,
    md04,
    md05,
    md06,
    md07,
    md08,
    md09,
    md10,
    md11,
    md12,
  ];

  interface mdFileContents {
    meta: {
      title: string;
      layout: string;
      imageLink: string;
      tags: string;
      period: string;
    };
    contents: string;
  }

  const [fileContents, setFileContents] = useState<mdFileContents[]>([]);

  useEffect(() => {
    mdFiles.map((file) => {
      fetch(file)
        .then((res) => res.text())
        .then((text) => {
          const mdFileMeta = text.split("---")[1].replace(/\n|\r|\s*/g, "");
          const meta = extractMdFileMetaData(mdFileMeta);

          setFileContents((prevFileContents) => [
            { meta, contents: text.split("---")[2] },
            ...prevFileContents,
          ]);
        });
    });
  }, []);

  const extractMdFileMetaData = (mdFileMeta: string) => {
    const title = JSON.parse(mdFileMeta.split(",")[0]).title;
    const layout = JSON.parse(mdFileMeta.split(",")[1]).layout;
    const imageLink = JSON.parse(mdFileMeta.split(",")[2]).imageLink;
    const tags = JSON.parse(mdFileMeta.split(",")[3]).tags;
    const period = JSON.parse(mdFileMeta.split(",")[4]).period;

    return { title, layout, imageLink, tags, period };
  };

  return (
    <>
      {fileContents &&
        fileContents.map((fileContents) => {
          return (
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <TimelineContentProjectCard
                  meta={fileContents.meta}
                  contents={fileContents.contents}
                />
              </TimelineContent>
            </TimelineItem>
          );
        })}
    </>
  );
}
export default ProjectMdFileReader;
