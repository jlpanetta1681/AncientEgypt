import React from 'react'
import Image from 'next/image'
import styles from '../styles/Hieroglyphics.module.css'


function Hieroglyphics() {
    return (

        <div className={styles.mainContainer}>
         <div className='pageTitle'>The languages of the ancient Egyptians</div>
            <div className={styles.imageContainer}>
                <Image className={styles.painting}
                    src='/hieroglyphs.jpg'
                    alt='glyphs'
                    quality={100}
                    width='200'
                    height='200'
                />

                <Image className={styles.phrases}
                    src='/phrases.gif'
                    alt='sayings'
                    quality={100}
                    width='200'
                    height='200'

                />
                <Image className={styles.translations2}
                    src='/alphabet.jpg'
                    alt='translations2'
                    quality={100}
                    width='200'
                    height='200'

                />




                <Image className={styles.translator}
                    src='/hieroglyphs2.jpg'
                    alt='glyphs'
                    quality={100}
                    width='200'
                    height='200'
                />
            </div>
            <p className={styles.p}>
                Egyptian hieroglyphs ,<em>(/ˈhaɪrəˌɡlɪfs/, /ˈhaɪroʊˌɡlɪfs/)]]</em> were the formal writing system used in Ancient Egypt. <br />     Hieroglyphs combined logographic, syllabic and alphabetic elements, with some 1,000 distinct characters. Cursive hieroglyphs were used for religious literature on papyrus and wood. The later hieratic and demotic Egyptian scripts were derived from hieroglyphic writing, as was the Proto-Sinaitic script that later evolved into the Phoenician alphabet. Through the Phoenician alphabet's major child systems (the Greek and Aramaic scripts(The alleged language Jesus christ ws said to ha spoken)), the Egyptian hieroglyphic script is ancestral to the majority of scripts in modern use, most prominently the Latin and Cyrillic scripts (through Greek) and the Arabic script and possibly Brahmic family of scripts (through Aramaic, Phoenician, and Greek) (Pillai 2021).<br />
            </p>

            <p className={styles.p}>
                The use of hieroglyphic writing arose from proto-literate symbol systems in the Early Bronze Age, around the 32nd century BC (Naqada III),[2] with the first decipherable sentence written in the Egyptian language dating to the Second Dynasty (28th century BC). Egyptian hieroglyphs developed into a mature writing system used for monumental inscription in the classical language of the Middle Kingdom period; during this period, the system made use of about 900 distinct signs. The use of this writing system continued through the New Kingdom and Late Period, and on into the Persian and Ptolemaic periods. Late survivals of hieroglyphic use are found well into the Roman period, extending into the 4th century AD.[4]
            </p>
            <p className={styles.p}>

                With the final closing of pagan temples in the 5th century, knowledge of hieroglyphic writing was lost. Although attempts were made, the script remained undeciphered throughout the Middle Ages and the early modern period. The decipherment of hieroglyphic writing was finally accomplished in the 1820s by Jean-François Champollion, with the help of the Rosetta Stone.

            </p>
        </div>
    )
}

export default Hieroglyphics;