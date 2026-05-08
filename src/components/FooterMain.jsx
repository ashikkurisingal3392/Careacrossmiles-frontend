import React from 'react'

import {
    Footer,
    FooterBrand,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
} from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

function FooterMain() {
    return (
        <div>

            <Footer container className='rounded-none ' style={{ backgroundColor: '#264d4d' }}>
                <div className="w-full " style={{ backgroundColor: '#264d4d' }}>
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div>
                            <FooterBrand
                                href="#"
                                src="https://png.pngtree.com/png-vector/20250802/ourlarge/pngtree-hand-drawn-green-coconut-tree-icon-elements-png-image_16966361.webp"
                                alt="Care Across Miles Logo"
                                name="Care Across Miles"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">

                            <div>
                                <FooterTitle title="Platform" />
                                <FooterLinkGroup col>
                                    <FooterLink className='hover:text-yellow-300' href="#">Dashboard</FooterLink>
                                    <FooterLink className='hover:text-yellow-300' href="#">Care Tasks</FooterLink>
                                    <FooterLink className='hover:text-yellow-300' href="#">Appointments</FooterLink>
                                    <FooterLink className='hover:text-yellow-300' href="#">Medicines</FooterLink>
                                </FooterLinkGroup>
                            </div>
                          
                            <div>
                                <FooterTitle title="Company" />
                                <FooterLinkGroup col>
                                    <FooterLink href="#" className='hover:text-yellow-300'>About Us</FooterLink>
                                    <FooterLink href="#" className='hover:text-yellow-300'>Blog</FooterLink>
                                    <FooterLink href="#" className='hover:text-yellow-300'>Terms of Service</FooterLink>
                                    <FooterLink href="#" className='hover:text-yellow-300'>Contact</FooterLink>
                                    <FooterLink href="#" className='hover:text-yellow-300'>Careers</FooterLink>
                                </FooterLinkGroup>
                            </div>
                              <div>
                                <FooterTitle title="Legal" />
                                <FooterLinkGroup col>
                                    <FooterLink href="#">Privacy Policy</FooterLink>
                                    <FooterLink href="#">Terms &amp; Conditions</FooterLink>
                                </FooterLinkGroup>
                            </div>
                        </div>
                    </div>
                   <div className="h-px bg-yellow-600 opacity-75 my-4"></div>
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <FooterCopyright href="#" by="CareAcrossMiles" year={2026} />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center ">
                            <FooterIcon className='hover:text-blue-600!'  href="#" icon={BsFacebook} />
                            <FooterIcon className='hover:text-red-600!' href="#" icon={BsInstagram} />
                            <FooterIcon className='hover:text-blue-300!' href="#" icon={BsTwitter} />
                            <FooterIcon className='hover:text-black!' href="#" icon={BsGithub} />
                            <FooterIcon  className='hover:text-yellow-600!'href="#" icon={BsDribbble} />
                        </div>
                    </div>
                </div>
            </Footer>


        </div>
    )
}

export default FooterMain
