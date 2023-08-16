import Image from 'next/image'

export default function Home() {
  return (
    <main className='dark:bg-neutral-900 dark:text-gray-400 overflow-x-hidden overflow-y-auto grid p-8 md:p-16 xl:px-64 xl:py-24 w-screen h-screen text-gray-600'>
      <div className='w-full col-span-2'>
        <header className='grid 2xl:grid-cols-4'>
          <div className='col-span-3'>
            <p className='pt-2 text-[min(10vw,60px)] font-extrabold text-black dark:text-gray-300'>Owen Gaspard</p>
            <p className='pt-2 text-[min(4vw,20px)] font-light'>System Administrator,<br/>Full Stack Developer</p>
          </div>
          {/*
          <div className='pt-8 2xl:pt-0'>
              <div className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg><a className='text-2xl text-black dark:text-gray-300 hover:underline' href='mailto:hi@ogaspard.com'>hi@ogaspard.com</a></div>
              <div className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg><a className='text-2xl text-black dark:text-gray-300 hover:underline' href='https://github.com/owengaspard'>@owengaspard</a></div>
              <div className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg><a className='text-black dark:text-gray-300 text-2xl hover:underline' href='https://linkedin.com/in/owen-gaspard'>/owen-gaspard</a></div>
          </div>
          */}
        </header>
        <div className='grid md:grid-cols-3 gap-24'>
          <div className='md:col-span-2'>
            <p className='pt-8 font-bold text-2xl text-black dark:text-gray-300'>About Me</p>
            <p className='pt-4 text-lg font-light'>Hey, I&apos;m Owen, a seventeen-year-old systems administrator and full-stack developer based in New Orleans. My skillset encompasses proficiency in industry-leading tools like React and TailwindCSS. I hold an AWS Certified Cloud Practitioner certification and have hands-on experience with cloud solutions, including AWS and Azure, as well as Cloudflare&apos;s global CDN and WAF. I excel in managing both on-premises solutions such as ESXi and cloud-based environments.</p>
            <p className='pt-2 text-lg font-light'>In addition, I am well-versed in administering both Windows and Linux systems, with a strong affinity for Linux across desktop and server setups. I demonstrate expertise in Python for AI and machine learning tasks and Java for robotics applications. My aptitude extends to database administration using SQL, backed by relevant certifications.</p>
            
            <p className='pt-8 font-bold text-2xl text-black dark:text-gray-300'>Experience</p>
            <div className='pt-4 grid lg:grid-cols-4'>
              <div className='md:col-span-1'>
                <div className='pt-2 text-lg font-light'>
                  <p className='font-semibold text-black dark:text-gray-300'>Famcore Foundation</p>
                    <a href='https://famcorefoundation.com' target='_blank' rel='noreferrer' className='hover:underline'>famcorefoundation.com</a>
                    <p>August 2023 - Present</p>
                  </div>
              </div>
              <div className='pl-4 md:pl-16 col-span-3'>
                <div className='pt-2 text-lg'>
                  <p className='text-black dark:text-gray-300'>Systems Administrator</p>
                  <p className='font-light'>I build custom solutions for Famcore and manage various technologies, such as Google Workspace. I develop or assist in building the websites for Famcore and its drives, and I build the backends for these sites, such as the contact forms running on AWS Lambda functions. I am also working on other services to drastically speed up operations, and I plan to open source some of these solutions on Famcore&apos;s GitHub page.</p>
                  <p className='text-black dark:text-gray-300 pt-4'>Cloud Engineer</p>
                  <p className='font-light'>At Famcore, I use my experience in AWS to speed up operations. I migrated the organization&apos;s volunteer form to a custom-built solution backed by AWS Lambda. I also migrated some of the spreadsheets to DynamoDB in order to perform data analysis and grouping through Lambda and Power BI. Cost-effectiveness is my top priority at Famcore, especially due to it being a nonprofit.At Famcore, I use my experience in AWS to speed up operations. I migrated the organization&apos;s volunteer form to a custom-built solution backed by AWS Lambda. I also migrated some of the spreadsheets to DynamoDB in order to perform data analysis and grouping through Lambda and Power BI. Cost-effectiveness is my top priority at Famcore, especially due to it being a nonprofit.</p>
                  <p className='text-black dark:text-gray-300 pt-4'>Data Analyst</p>
                  <p className='font-light'>I cleaned data pertaining to Famcore Foundation&apos;s donors and volunteers and put them into Amazon DynamoDB. From there, I was able to import the data into Power BI and created charts to allow the organization to easily track metrics.</p>
                </div>
                </div>
            </div>

            <p className='font-bold text-black dark:text-gray-300 pt-8 text-2xl'>Projects</p>
            <div className='pt-4 grid lg:grid-cols-4'>
              <div className='md:col-span-1'>
                <div className='pt-2 text-lg font-light'>
                  <p className='font-semibold text-black dark:text-gray-300'>Cloud File Storage Server on AWS</p>
                    <p>June - July 2023</p>
                </div>
              </div>
              <div className='pl-4 md:pl-16 col-span-3'>
                <div className='pt-2 text-lg font-light'>
                  <p>I engineered a cloud-based file storage server utilizing a selection of Amazon Web Services (AWS). The goal was to establish a scalable and secure file storage solution. Here&apos;s a brief overview of how I used various AWS services:</p>
                  <p className='pt-2'>Amazon EC2: Hosted the server-side application on EC2 instances. This allowed for the creation of a scalable environment that can adapt to changes in demand.</p>
                  <p className='pt-2'>Amazon S3: Chose Amazon S3 to store files, taking advantage of its high durability and availability.</p>
                  <p className='pt-2'>Amazon Route 53: Managed DNS using Route 53, ensuring a reliable and easily accessible server.</p>
                  <p className='pt-2'>AWS IAM: Bridged the EC2 instance to the S3 bucket securely by setting up proper permissions using Identity and Access Management (IAM).</p>
                  <p className='pt-2'>For the software part, I implemented FileCloud, an enterprise-grade file sharing solution known for secure file sharing, synchronization, and custom branding. FileCloud&apos;s comprehensive features complemented the robust infrastructure provided by AWS.</p>
                </div>
              </div>
            </div>

            <div className='pt-4 grid lg:grid-cols-4'>
              <div className='md:col-span-1'>
                <div className='pt-2 text-lg font-light'>
                  <p className='font-semibold text-black dark:text-gray-300'>FIRST Tech Challenge Robotics Team Website</p>
                  <a href='https://jesuitroboticsnola.org' target='_blank' rel='noreferrer' className='hover:underline'>jesuitroboticsnola.org</a>
                    <p>September 2021 - Present</p>
                </div>
              </div>
              <div className='pl-4 md:pl-16 col-span-3'>
                <div className='pt-2 text-lg font-light'>
                  <p>I had the wonderful opportunity to develop the website for my school&apos;s FTC Robotics Team. The goal was to create a modern and user-friendly web platform to showcase our team&apos;s activities, achievements, and provide a way for visitors to get in touch. Here&apos;s an overview of the technologies and services I utilized:</p>
                  <p className='pt-2'>ReactJS: Employed React as the primary front-end library to create a dynamic and responsive user interface. React&apos;s component-based architecture allowed for reusable components and a more organized codebase.</p>
                  <p className='pt-2'>TailwindCSS: Integrated TailwindCSS for styling the website. TailwindCSS&apos;s utility-first CSS framework enabled rapid design iterations and a visually appealing user experience.</p>
                  <p className='pt-2'>AWS Lambda & SES: To build an efficient contact form, I used Amazon Web Services (AWS). I utilized AWS Lambda to handle form submissions and AWS Simple Email Service (SES) to send email notifications to the team.</p>
                  <p className='pt-2'>This project not only improved my web development and cloud computing skills but also contributed positively to my school&apos;s robotics team by providing them with an online presence.</p>
                </div>
              </div>
            </div>

            <div className='pt-4 grid lg:grid-cols-4'>
              <div className='md:col-span-1'>
                <div className='pt-2 text-lg font-light'>
                  <p className='font-semibold text-black dark:text-gray-300'>Personal Website</p>
                  <a href='https://ogaspard.com' target='_blank' rel='noreferrer' className='hover:underline'>ogaspard.com</a>
                  <p>July 2020 - Present</p>
                  </div>
              </div>
              <div className='pl-4 md:pl-16 col-span-3'>
                <div className='pt-2 text-lg font-light'>
                  <p>I am excited to share my personal website, which I built as a platform to showcase my portfolio, share my experiences, and connect with professionals and enthusiasts alike. Here&apos;s a brief overview of the technologies and features I utilized:</p>
                  <p className='pt-2'>ReactJS: Used React as the primary front-end library for building a dynamic and responsive user interface. React&apos;s component-based architecture enabled a clean and modular codebase.</p>
                  <p className='pt-2'>TailwindCSS: Integrated TailwindCSS to style the website. Its utility-first CSS framework allowed for rapid design iterations and ensured a modern and polished user experience.</p>
                  <p className='pt-2'>AWS Lambda & SES: For the contact form, I employed Amazon Web Services (AWS). I used AWS Lambda to process form submissions and AWS Simple Email Service (SES) to send email notifications to my inbox. This allowed for a serverless architecture, which is both efficient and scalable.</p>
                  <p className='pt-2'>Building my personal website has been a fantastic learning experience, and it has given me an opportunity to showcase my work and connect with a broader audience.</p>
                </div>
              </div>
            </div>

            <div className='pt-4 grid lg:grid-cols-4'>
              <div className='md:col-span-1'>
                <div className='pt-2 text-lg font-light'>
                  <p className='font-semibold text-black dark:text-gray-300'>Snippet Share - Text Sharing Service</p>
                    <p>November 2022 - February 2023</p>
                </div>
              </div>
              <div className='pl-4 md:pl-16 col-span-3'>
                <div className='pt-2 text-lg font-light'>
                  <p>Snippet Share is a text sharing service I built that allows users to save and manage &quot;snippets&quot; - short text files that can include code, color values, and more. The platform is designed to offer users an organized and secure way to store and access their snippets. Below is an overview of the main features and technologies I used:</p>
                  <p className='pt-2'>User Authentication: Integrated user authentication to ensure that users can only view and manage snippets they have created. This was vital for ensuring the privacy and integrity of user data.</p>
                  <p className='pt-2'>MongoDB: Chose MongoDB as the database to store the snippets. MongoDB&apos;s flexible schema and high-performance NoSQL database was well-suited for storing various types of text data.</p>
                  <p className='pt-2'>Express: Used Express as the back-end web application framework for building the API. Express streamlined the process of handling requests and routing.</p>
                  <p className='pt-2'>Docker: Containerized the application using Docker, which simplified deployment and ensured a consistent environment regardless of the platform.</p>
                  <p className='pt-2'>TailwindCSS: Incorporated TailwindCSS for styling the user interface. TailwindCSS&apos;s utility-first approach enabled rapid design iterations and a visually cohesive user experience.</p>
                  <p className='pt-2'>Personalized Dashboard: Created a personalized dashboard for authenticated users, showing a list of their snippets. Users can easily manage (add, edit, delete) their snippets through this dashboard.</p>
                  <p className='pt-2'>Snippet Share was a challenging and rewarding project that further honed my skills in web development, database management, and user authentication.</p>
                </div>
              </div>
            </div>

          </div>

          <div className='col-span-1'>
            <p className='font-bold text-black dark:text-gray-300 pt-8 pb-4 text-2xl'>Contact</p>
            <div className='flex gap-2'><svg className='dark:fill-gray-400' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg><a className='text-lg font-light hover:underline' href='mailto:hi@ogaspard.com'>hi@ogaspard.com</a></div>
            <div className='flex gap-2'><svg className='dark:fill-gray-400' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg><a className='text-lg font-light hover:underline' href='https://github.com/owengaspard'>@owengaspard</a></div>
            <div className='flex gap-2'><svg className='dark:fill-gray-400' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg><a className='text-lg font-light hover:underline' href='https://linkedin.com/in/owen-gaspard'>/owen-gaspard</a></div>
            <p className='font-bold text-black dark:text-gray-300 pt-8 text-2xl'>Languages</p>
            <p className='pt-4 text-lg font-light'>- Java<br/>- Python<br/>- JavaScript<br/>- SQL</p>
            <p className='font-bold text-black dark:text-gray-300 pt-8 text-2xl'>Frameworks/Web Tools</p>
            <p className='pt-4 text-lg font-light'>- React.js<br/>- Next.js<br/>- Remix/Hydrogen<br/>- Stripe.js<br/>- TailwindCSS</p>
            <p className='font-bold text-black dark:text-gray-300 pt-8 text-2xl'>Certification</p>
            <a href='https://www.credly.com/badges/174dcd39-7624-40c0-8abf-3e4775eb260d/public_url' target='_blank' rel='noreferrer'>
              <div className='pt-4 grid lg:grid-cols-4 lg:gap-4 hover:underline'>
                <div className='lg:col-span-1'>
                  <Image alt='cert' width='100' height='50' src='./aws-ccp.png' />
                </div>
                <div className='lg:col-span-3'>
                  <p className='text-black dark:text-gray-300 pt-2.5 text-lg'>Amazon Web Services</p>
                  <p className='text-lg font-light'>Certified Cloud Practitoner</p>
                </div>
              </div>
            </a>
            <p className='font-bold text-black dark:text-gray-300 pt-8 text-2xl'>Education</p>
            <p className='text-black dark:text-gray-300 pt-4 text-lg'>Jesuit High School of New Orleans</p>
            <p className='text-lg font-light'>High School Diploma</p>
          </div>
        </div>
      </div>
    </main>
  )
}
