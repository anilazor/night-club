import IconBorder from "./icons/IconBorder";
import { FaFacebookF } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import footerbg from "../assets/bg/footerbg.jpg";
import postOne from "../assets/content-img/recent_post1.jpg";
import postTwo from "../assets/content-img/recent_post2.jpg";
import { FaTwitter } from "react-icons/fa";

import Image from "next/image";
import Logo from "../assets/icon/Logo_main.svg";

import { Caption, HeadingSecondary } from "./typography";

const Footer = () => {
  return (
    <div className="grid col-(--full-col) grid-cols-subgrid">
      <Image src={footerbg} alt="Footer background" width={300} height={200} className="col-(--full-col) row-1 self-stretch object-cover w-full h-auto grid-cols-subgrid opacity-10" priority={false} />
      <div className="col-(--content-col) row-1 grid grid-cols-subgrid justify-center mt-10 text-center gap-7">
        <div className="md:grid md:grid-cols-3 md:gap-5 md:text-start">
          <div className="grid gap-7">
            <Image src={Logo} alt="logo" className="justify-self-center w-50 h-auto md:justify-self-start" width={96} height={96} />
            <div>
              <HeadingSecondary text="Location" />
              <Caption
                text="Kompagnistræde 278
1265 Købehavn K"
              />
            </div>
            <div>
              <HeadingSecondary text="Opening Hours" />
              <Caption text="WED - THU 10:30 PMTO 3 AM" />
              <Caption text="SAT - SUN: 11 PM TO 5 AM" />
            </div>
          </div>

          <div className="hidden md:grid col-2 text-start gap-4">
            <HeadingSecondary text="Recent posts" />
            <div className="flex gap-10">
              <Image src={postOne} alt="post one" className="self-stretch object-cover aspect-square" />
              <div className="grid gap-2">
                <Caption text="Lorem Ipsum is simply dummy text of the printing and typesetting." />
                <Caption text="April 17. 2018" />
              </div>
            </div>
            <div className="flex gap-10">
              <Image src={postTwo} alt="post one" className="self-stretch object-cover aspect-square" />
              <div className="grid gap-2">
                <Caption text="Lorem Ipsum is simply dummy text of the printing and typesetting." />
                <Caption text="April 17. 2018" />
              </div>
            </div>
          </div>
          <div className="hidden md:grid col-3 text-start gap-4">
            <HeadingSecondary text="Recent tweets" />
            <div className="flex gap-10">
              <FaTwitter size={25} className="ml-5" />
              <div className="grid gap-2">
                <Caption text="Lorem Ipsum is simply dummy text of the printing and typesetting." />
                <Caption text="April 17. 2018" />
              </div>
            </div>
            <div className="flex gap-10">
              <FaTwitter size={25} className="ml-5" />
              <div className="grid gap-2">
                <Caption text="Lorem Ipsum is simply dummy text of the printing and typesetting." />
                <Caption text="April 17. 2018" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-7 md:grid-cols-3 md:grid-rows-1 md:mt-20">
          <div className="md:col-2 md:row-1 md:self-end">
            <Caption text="Stay connected with us" />
            <div className="flex justify-center gap-3 my-2">
              <IconBorder>
                <FaFacebookF size={20} />
              </IconBorder>
              <IconBorder>
                <FaSnapchatGhost size={20} />
              </IconBorder>
              <IconBorder>
                <FaInstagram size={25} />
              </IconBorder>
            </div>
          </div>
          <div className="md:col-1 md:row-1 md:self-end">
            <Caption text="Night Club PSD Template - All Rights Reserved" />
          </div>
          <div className="md:col-3 md:row-1 md:self-end">
            <Caption text="Copyright © NightClub" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
