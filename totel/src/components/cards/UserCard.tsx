import React from "react";
import styles from "../Styles/UserCard.module.css";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
export default function HotelCard() {
  return (
    <div className={styles.body}>
      <Image
        className={styles.img}
        src="/Images/room.jpg"
        alt="Hotel Image"
        width={0}
        height={0}
        unoptimized
      />
      <div className="p-4">
        <div className="flex">
          <h2 className={styles.hname}>Devid Johanson</h2>

        </div>
        <h2 className={styles.dates}>24 years / Male</h2>
        <h3 className={styles.about}>
        Looking for 1-2 roommates for a place in <br/> Manchester city centre (wanting to <br/>move in around August time) but happy to<br/> move in with more than that, I’m <br/>super easy going and tidy.
        </h3>

        <p className={styles.rate}>Looking Near: London</p>
      </div>
    </div>
  );
}
