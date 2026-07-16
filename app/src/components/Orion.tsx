'use client';

import { motion } from 'motion/react';

interface Props {
    pathColor?: string,
    starColor?: string,
    active?:    boolean
}

function Orion({ pathColor = '#116eff', starColor = '#c6c9ff', active = true }: Props) {
    const longPathDrawAnimation = {
        hidden: {
            pathLength: 0,
            opacity: 0
        },
        visible: {
            pathLength: 1,
            opacity: 1,

            transition: {
                pathLength: {
                    duration: 3,
                    delay: 1
                },
                opacity: {
                    duration: 0.5,
                    delay: 0.75
                }
            }
        }
    }

    const shortPathDrawAnimation = {
        hidden: {
            pathLength: 0,
            opacity: 0
        },
        visible: {
            pathLength: 1,
            opacity: 1,

            transition: {
                pathLength: {
                    duration: 1,
                    delay: 3
                },
                opacity: {
                    duration: 0.5,
                    delay: 2.75
                }
            }
        }
    }

    const starsAnimation = {
        hidden: {
            r: 0,
            opacity: 0
        },
        visible: {
            r: 2,
            opacity: 1,
            
            transition: {
                r: {
                    duration: 1,
                    delay: 0.5
                },
                opacity: {
                    duration: 0.5,
                    delay: 0.25
                }
            }
        }
    }

    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 140.88736 213.72366"
            style={{ overflow: 'visible' }}
        >
            <g
                id="stars"
                transform="translate(-34.416765,-6.510039)"
            >
                <motion.path
                    d="M 44.560487,8.3583686 36.21795,48.409248 44.707309,81.035275 57.734406,99.740256 80.972352,165.01748 69.973909,218.49419 129.54368,209.8624 103.49905,154.1107 112.50763,103.96049 93.693431,81.444279 58.110064,99.513876"
                    id="main-path"
                    strokeWidth={0.5}
                    stroke={pathColor}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial="hidden"
                    animate={active ? 'visible' : 'hidden'}
                    variants={longPathDrawAnimation}
                />

                <motion.path
                    d="M 64.664314,8.453821 52.977279,42.120793 35.936155,48.55756"
                    id="top-path"
                    strokeWidth={0.5}
                    stroke={pathColor}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial="hidden"
                    animate={active ? 'visible' : 'hidden'}
                    variants={shortPathDrawAnimation}
                />

                <motion.path
                    d="m 173.7631,101.20855 -2.69446,12.09611 -1.42627,17.95424 -10.02585,5.95678"
                    id="bow-bottom"
                    strokeWidth={0.5}
                    stroke={pathColor}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial="hidden"
                    animate={active ? 'visible' : 'hidden'}
                    variants={shortPathDrawAnimation}
                />

                <motion.path
                    d="m 112.50763,103.96049 61.25547,-2.75194 -1.10039,-16.429315 -10.94873,-7.928387"
                    id="bow-top"
                    strokeWidth={0.5}
                    stroke={pathColor}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial="hidden"
                    animate={active ? 'visible' : 'hidden'}
                    variants={shortPathDrawAnimation}
                />

                <motion.path
                    d="M 103.49905,154.1107 80.972352,165.01748"
                    id="waist"
                    strokeWidth={0.5}
                    stroke={pathColor}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial="hidden"
                    animate={active ? 'visible' : 'hidden'}
                    variants={shortPathDrawAnimation}
                />

                <g
                    id="g6"
                >
                    <motion.circle
                        id="star1"
                        cx="44.537952"
                        cy="8.3558016"
                        r="2"
                        fill={starColor}
                        initial="hidden"
                        animate={active ? 'visible' : 'hidden'}
                        variants={starsAnimation}
                    />
                    
                    <motion.circle
                        id="star2"
                        cx="64.486031"
                        cy="8.4283037"
                        r="2"
                        fill={starColor}
                        initial="hidden"
                        animate={active ? 'visible' : 'hidden'}
                        variants={starsAnimation}
                    />
                    
                    <motion.circle
                        id="star3"
                        cx="53.01091"
                        cy="42.156982"
                        r="2"
                        fill={starColor}
                        initial="hidden"
                        animate={active ? 'visible' : 'hidden'}
                        variants={starsAnimation}
                    />
                    
                    <motion.circle
                        id="star4"
                        cx="36.262527"
                        cy="48.382927"
                        r="2"
                        fill={starColor}
                        initial="hidden"
                        animate={active ? 'visible' : 'hidden'}
                        variants={starsAnimation}
                    />
                    
                    <motion.circle
                        id="star5"
                        cx="44.656235"
                        cy="81.046593"
                        r="2"
                        fill={starColor}
                        initial="hidden"
                        animate={active ? 'visible' : 'hidden'}
                        variants={starsAnimation}
                    />
                    
                    <motion.circle
                        id="star6"
                        cx="57.636044"
                        cy="99.732079"
                        r="2"
                        fill={starColor}
                        initial="hidden"
                        animate={active ? 'visible' : 'hidden'}
                        variants={starsAnimation}
                    />
                    
                    <motion.circle
                        id="star7"
                        cx="93.742477"
                        cy="81.652214"
                        r="2"
                        fill={starColor}
                        initial="hidden"
                        animate={active ? 'visible' : 'hidden'}
                        variants={starsAnimation}
                    />
                    
                    <motion.circle
                        id="star8"
                        cx="112.48475"
                        cy="103.96478"
                         r="2"
                         fill={starColor}
                        initial="hidden"
                        animate={active ? 'visible' : 'hidden'}
                        variants={starsAnimation}
                    />
                    
                    <motion.circle
                        id="star9"
                        cx="103.44227"
                        cy="154.13663"
                        r="2"
                        fill={starColor}
                        initial="hidden"
                        animate={active ? 'visible' : 'hidden'}
                        variants={starsAnimation}
                    />
                    
                    <motion.circle
                        id="star10"
                        cx="80.897476"
                        cy="165.01562"
                        r="2"
                        fill={starColor}
                        initial="hidden"
                        animate={active ? 'visible' : 'hidden'}
                        variants={starsAnimation}
                    />
                    
                    <motion.circle
                        id="star11"
                        cx="69.997643"
                        cy="218.38794"
                        r="2"
                        fill={starColor}
                        initial="hidden"
                        animate={active ? 'visible' : 'hidden'}
                        variants={starsAnimation}
                    />
                    
                    <motion.circle
                        id="star12"
                        cx="159.71764"
                        cy="137.18774"
                        r="2"
                        fill={starColor}
                        initial="hidden"
                        animate={active ? 'visible' : 'hidden'}
                        variants={starsAnimation}
                    />
                    
                    <motion.circle
                        id="star13"
                        cx="169.55385"
                        cy="131.19957"
                        r="2"
                        fill={starColor}
                        initial="hidden"
                        animate={active ? 'visible' : 'hidden'}
                        variants={starsAnimation}
                    />
                    
                    <motion.circle
                        id="star14"
                        cx="170.98097"
                        cy="113.10115"
                        r="2"
                        fill={starColor}
                        initial="hidden"
                        animate={active ? 'visible' : 'hidden'}
                        variants={starsAnimation}
                    />
                    
                    <motion.circle
                        id="star16"
                        cx="173.45836"
                        cy="101.33021"
                        r="2"
                        fill={starColor}
                        initial="hidden"
                        animate={active ? 'visible' : 'hidden'}
                        variants={starsAnimation}
                    />
                    
                    <motion.circle
                        id="star17"
                        cx="172.44981"
                        cy="84.997253"
                        r="2"
                        fill={starColor}
                        initial="hidden"
                        animate={active ? 'visible' : 'hidden'}
                        variants={starsAnimation}
                    />
                    
                    <motion.circle
                        id="star18"
                        cx="161.49245"
                        cy="76.797394"
                        r="2"
                        fill={starColor}
                        initial="hidden"
                        animate={active ? 'visible' : 'hidden'}
                        variants={starsAnimation}
                    />
                    
                    <motion.circle
                        id="star19"
                        cx="129.4511"
                        cy="209.90533"
                        r="2"
                        fill={starColor}
                        initial="hidden"
                        animate={active ? 'visible' : 'hidden'}
                        variants={starsAnimation}
                    />
                </g>
            </g>
        </svg>

    );
}

export default Orion;