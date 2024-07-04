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
                        <p className="max-w-3xl px-5">
                            My name is Ross Kmet. I've spend the last 10 years saturated in Electrical and Computer Engineering. Yes, by choice,
                            and I couldn't be happier.
                            <br/><br/>
                            Something else...
                        </p>
                        <Image 
                            className="px-5 py-10"
                            alt="Picture of Ross" 
                            src="/placeholder.jpg"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '45%', height: '45%'}} // optional
                        />
                    </div>
                    <div className="py-20">
                        <h2 className="text-3xl">Expertise</h2>
                        <Separator width="max-w-2xl" />
                        <pre className={`${utilStyles.tab}`}>
                            <span className="underline underline-offset-8 decoration-indigo-500">Languages</span>
                            <br/>////   C++, C#, Python, Javascript, Typescript, SQL
                            <br/><br/>
                            <span className="underline underline-offset-8 decoration-indigo-500">Backend + Data</span>
                            <br/>////   NodeJS, PostgreSQL, Kafka, Spark, SparkMlib, Pandas, Airflow
                            <br/><br/>
                            <span className="underline underline-offset-8 decoration-indigo-500">Frontend + UI</span>
                            <br/>////   HTML, CSS, NextJS, React, Svelte, Windows Forms, WPF
                            <br/><br/>
                            <span className="underline underline-offset-8 decoration-indigo-500">Cloud</span>
                            <br/>////   Docker, Kubernetes
                            <br/>////   AWS: Lambda, Glue, EKS, ECS, RDS, Redshift
                            <br/>////   GCP:
                            <br/><br/>
                            <span className="underline underline-offset-8 decoration-indigo-500">Prototyping</span>
                            <br/>////   Figma, Max/MSP, Pure Data
                            <br/><br/>
                            <span className="underline underline-offset-8 decoration-indigo-500">Audio</span>
                            <br/>////   JUCE, Max/MSP
                            <br/><br/>
                        </pre>
                    </div>
                    <div className="py-20">
                        <h2 className="text-3xl">Experience</h2>
                        <Separator width="max-w-2xl" />
                            <h4 className="font-bold">
                                <span>2021 - 2024</span> // Casual Precision // Director of Engineering
                            </h4>
                            <p className="py-3">
                                yadda yadda
                            </p>
                        <div className="py-3"><Separator width="max-w-md" /></div>
                            <h4 className="font-bold">
                                <span>2020 - 2021</span> // Casual Precision // Lead Data Engineer
                            </h4>
                            <p className="py-3">
                                yadda yadda
                            </p>
                        <div className="py-3"><Separator width="max-w-md" /></div>
                        <h4 className="font-bold">
                            <span>2019 - 2020</span> // Belcan (GE Aviation) // Embedded Software Test Engineer
                        </h4>
                        <p className="py-3">
                                yadda yadda
                            </p>
                        <div className="py-3"><Separator width="max-w-md" /></div>
                    </div>
                    <div className="py-10">
                        <h2 className="text-3xl">Education</h2>
                        <Separator width="max-w-2xl" />
                        <p>
                            <span className="font-bold">Western Michigan University</span>
                            <br/> Bachelor of Science, Electrical Engineering // 2019
                            {/* <br/> <small>Minor in Mathematics</small> */}
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}