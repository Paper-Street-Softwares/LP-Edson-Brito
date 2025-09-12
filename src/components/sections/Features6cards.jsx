import { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Dialog } from "primereact/dialog";
import { X, MoveRight } from "lucide-react";
import content from "../../content/content";
import IconFeatureCard from "../cards/IconFeatureCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Button from "../interactives/Button";

export default function Features6cards({ colorMode }) {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  const bgClasses = {
    dark: "bg-bgSectionOpacityDark",
    light: "bg-bgSectionOpacityLight",
    default: "squares",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-black",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  const cardNumbers = [1, 2, 3, 4, 5, 6];

  const renderTitle = (i) => {
    if (i === 6) {
      return (
        <Trans i18nKey={`features.card${i}.title`} components={{ i: <i /> }} />
      );
    }
    return t(`features.card${i}.title`);
  };

  const openModal = () => setVisible(true);

  return (
    <SectionArea id="service" className={`${bgClass}`}>
      <SectionHeader
        className={`text-center ${textClass}`}
        miniTitle={t("features.miniTag")}
        sectionHeaderTitle={t("features.title")}
        sectionHeaderSubtitle={t("features.subtitle")}
        titleColorSet={textClass}
        subtitleColorSet={textClass}
      />

      <SectionWrapper>
        <div className="flex flex-col items-center w-full justify-evenly tablet1:flex-row">
          <div className="col1 desktop1:w-[28%] flex flex-col items-center">
            {cardNumbers.slice(0, 3).map((i) => (
              <MotionDivDownToUp key={i}>
                <IconFeatureCard
                  icon={content.texts.features[`card${i}`].icon}
                  title={renderTitle(i)}
                  paragraph={t(`features.card${i}.subtitle`)}
                  className={
                    i === 1 ? "tablet1:mb-[26px] desktop1:mb-0" : undefined
                  }
                  colorMode={colorMode}
                />
              </MotionDivDownToUp>
            ))}
          </div>

          <MotionDivDownToUp className="hidden desktop1:flex justify-center w-[32%]">
            <div
              className="hidden h-[900px] w-full desktop1:flex col2 rounded-2xl bg-top bg-cover shadow-custom-opacity shadow-primary/50"
              style={{
                backgroundImage: `url(${content.texts.features.imgFeatures})`,
              }}
            ></div>
          </MotionDivDownToUp>

          <div className="col3 desktop1:w-[28%] flex flex-col items-center">
            {cardNumbers.slice(3, 6).map((i) => (
              <MotionDivDownToUp
                key={i}
                className={
                  i === 4
                    ? "flex items-center w-full tablet1:w-[290px] desktop1:w-[250px]"
                    : undefined
                }
              >
                <IconFeatureCard
                  icon={content.texts.features[`card${i}`].icon}
                  title={renderTitle(i)}
                  paragraph={t(`features.card${i}.subtitle`)}
                  className={
                    i === 4 ? "tablet1:mb-[26px] desktop1:mb-0" : undefined
                  }
                  colorMode={colorMode}
                >
                  {i === 6 && (
                    <Button
                      className="mt-[16px] text-labelButtons"
                      label={t("about.buttonModalLabelAbout")}
                      onClick={openModal}
                      removeAnchor={true}
                      removeTarget={true}
                      animation={true}
                      icon={<MoveRight />}
                    />
                  )}
                </IconFeatureCard>
              </MotionDivDownToUp>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Modal apenas para o último card */}
      <Dialog
        className="font-secondFont"
        closeIcon={<X size={20} />}
        header={t("features.card6.title")}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "4000px": "40vw", "1024px": "70vw", "641px": "85vw" }}
      >
        <div className="text-paragraph3">
          <div
            className="description"
            dangerouslySetInnerHTML={{
              __html: t("features.card6.description"),
            }}
          />
        </div>
      </Dialog>
    </SectionArea>
  );
}
