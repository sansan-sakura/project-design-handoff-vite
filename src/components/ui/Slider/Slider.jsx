import { SliderCard } from "../SliderCard/SliderCard";
import { useRef } from "react";
import styles from "./Slider.module.scss";
import { content as data } from "../../../statics/content";
import { MemberCard } from "../../ui/MemberCard";
import useScreenSize from "../../../hooks/useScreenSize";

export const Slider = ({ type = "slider" }) => {
  const sliderRef = useRef();
  const { width } = useScreenSize();
  const sliderData = type === "aboutHero" ? data.aboutHero.memberCards : data.slider;

  return (
    <div className={styles.slider_box} ref={sliderRef}>
      <ul className={`${styles.slider} ${type === "aboutHero" ? styles.about : ""}`}>
        {sliderData.map((slid, index) =>
          type !== "aboutHero" ? (
            <SliderCard
              key={slid.title}
              text={slid.text}
              title={slid.title}
              buttonText={slid.button}
              imagePath={slid.imgPath}
              bg={slid.bgColor}
              border={slid.border}
              styling={slid.styling}
              sliderRef={sliderRef}
              index={index}
            />
          ) : (
            <div className={styles.slides_wrapper} key={slid.name}>
              <MemberCard
                text={width < 992 && slid.shortText ? slid.shortText : slid.text}
                name={slid.name}
                imgPath={slid.imgPath}
              />
            </div>
          )
        )}
      </ul>
    </div>
  );
};
