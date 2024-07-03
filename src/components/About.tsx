import Image from 'next/image';
import Link from 'next/link';
import utilStyles from '@/app/utils.module.scss';

import SectionHeader from '@/components/SectionHeader';
import Separator from '@/components/Separator';

export default function About() {
    return (
        <>
            <div className="y-3 min-h-screen">
                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    <h1 className={utilStyles.headingXl}>About</h1>
                    <div className="flex">
                        <p className="max-w-3xl">
                            My name is Ross Kmet. I've spend the last 10 years saturated in Electrical and Computer Engineering. Yes, by choice,
                            and I couldn't be happier.
                            <br/><br/>
                            Something else...
                        </p>
                        <Image 
                            alt="Picture of Ross" 
                            src=""
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: 'auto', height: 'auto'}} // optional
                        />
                    </div>
                    <div className="py-10">
                        <h2 className="text-3xl">Expertise</h2>
                        <Separator width="max-w-2xl" />
                        <p>
                            Backend:
                            <br/><br/>
                            Frontend:
                            <br/><br/>
                            Low-Level:
                            <br/><br/>
                        </p>
                    </div>
                    <div className="py-10">
                        <h2 className="text-3xl">Experience</h2>
                        <Separator width="max-w-2xl" />
                            <h4 className="font-bold">2021 - 2024 // Casual Precision // Director of Engineering</h4>
                            <p>
                                yadda yadda
                            </p>
                        <div className="py-3"><Separator width="max-w-md" /></div>
                            <h4 className="font-bold">2020 - 2021 // Casual Precision // Lead Data Engineer</h4>
                            <p>
                                yadda yadda
                            </p>
                        <div className="py-3"><Separator width="max-w-md" /></div>
                        <h4 className="font-bold">2019 - 2020 // Belcan // Embedded Software Test Engineer</h4>
                            <p>
                                yadda yadda
                            </p>
                        <div className="py-3"><Separator width="max-w-md" /></div>
                    </div>
                    <div className="py-10">
                        <h2 className="text-3xl">Education</h2>
                        <Separator width="max-w-2xl" />
                        <p>
                            <span className="font-bold">Western Michigan University</span>
                            <br/> Bachelor of Science, Electrical Engineering 
                            <br/> <small>Minor in Mathematics</small>
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}