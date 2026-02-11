import React from 'react';
import { FaBriefcase, FaCode, FaCogs, FaGraduationCap, FaUsers } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className="surface-card text-white p-5 sm:p-8 rounded-3xl w-full max-w-screen-lg mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-white text-left">Resume</h1>
      <div className="border-t section-divider my-8"></div>
      
      <h2 className="text-3xl font-bold mb-4 text-white text-left flex items-center">
        <FaBriefcase className="text-blue-500 mr-4" /> Experience
      </h2>
      
      <div className="mb-8">
        {/* First Experience */}
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-1">
            <div className="w-3 h-3 mt-1 bg-blue-500 rounded-full"></div>
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-bold text-white text-left">IBM as Software Support Engineer Intern</h3>
            <div className="flex flex-col text-left">
              <p className="text-sm text-accent">February 2025 - Present</p>
              <p className="text-sm muted-text">Sydney, Australia</p>
            </div>
            <div className="border-l-2 section-divider mt-2 pl-4">
              <ul className="list-disc list-inside muted-text text-left space-y-6">
                <li>Collaborating with technical teams to manage and streamline support processes for IBM Maximo Asset Management, a leading 
                  enterprise asset management software used across various industries.</li>
                <li>Developing expertise in IT support workflows, troubleshooting complex system issues, 
                  and gaining exposure to database management technologies such as SQL and DB2.</li>
                <li>Enhancing automation and operational efficiency by documenting and optimizing technical support processes, 
                  ensuring seamless issue resolution and improved client experiences.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Second Experience */}
        <div className="flex items-start mt-12">
          <div className="flex-shrink-0 mt-1">
            <div className="w-3 h-3 mt-1 bg-blue-500 rounded-full"></div>
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-bold text-white text-left">Gartner as B2B Technology Advisory Sales Intern</h3>
            <div className="flex flex-col text-left">
              <p className="text-sm text-accent">December 2024 - February 2025</p>
              <p className="text-sm muted-text">Sydney, Australia</p>
            </div>
            <div className="border-l-2 section-divider mt-2 pl-4">
              <ul className="list-disc list-inside muted-text text-left space-y-6">
                <li>Researched and analysed technology challenges faced by 100+ mid-size enterprise clients, leveraging Gartner 
                insights to provide data-driven recommendations, improving client decision-making efficiency by 30%. </li>
                <li>Facilitated the B2B sales cycle by engaging with prospects and liaising with C-level execs in managing a $500K+ 
                  sales pipeline, gaining hands-on experience in CRM, lead qualification, and consultative selling of complex
                  solutions. </li>
                <li>Collaborated with cross-functional teams to develop and execute targeted outreach campaigns, 
                  leveraging CRM analytics and market research to refine client engagement strategies and 
                  boost qualified lead generation by 20%.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Third Experience */}
        <div className="flex items-start mt-12">
          <div className="flex-shrink-0 mt-1">
            <div className="w-3 h-3 mt-1 bg-blue-500 rounded-full"></div>
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-bold text-white text-left">KPMG as Audit & Assurance Intern</h3>
            <div className="flex flex-col text-left">
              <p className="text-sm text-accent">December 2022 - February 2023</p>
              <p className="text-sm muted-text">Sydney, Australia</p>
            </div>
            <div className="border-l-2 section-divider mt-2 pl-4">
              <ul className="list-disc list-inside muted-text text-left space-y-6">
                <li>Conducted detailed process walkthroughs and identified 10+ control deficiencies, resulting in improved 
                processes and enhanced financial reporting accuracy for the client.</li>
                <li>Prepare workpapers and conducted analytical reviews for a half-year review, identifying 20% reduction in errors 
                and saving 50+ hours in year-end audit documentation.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t section-divider my-8"></div>
      
      <h2 className="text-3xl font-bold mb-4 text-white text-left flex items-center">
        <FaGraduationCap className="text-blue-500 mr-4" /> Education
      </h2>
      
      <div className="mb-8">
        {/* University */}
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-1">
            <div className="w-3 h-3 mt-1 bg-blue-500 rounded-full"></div>
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-bold text-white text-left">University of New South Wales</h3>
            <p className="text-sm text-accent text-left">February 2021 - Present</p>
            <p className="text-sm muted-text text-left">Bachelor of Commerce(Finance) & Bachelor of Engineering(Software)(Honours)</p>
            <p className="text-sm muted-text text-left">Sydney, Australia</p>
          </div>
        </div>

        {/* High School */}
        <div className="flex items-start mt-8">
          <div className="flex-shrink-0 mt-1">
            <div className="w-3 h-3 mt-1 bg-blue-500 rounded-full"></div>
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-bold text-white text-left">Knox Grammar School</h3>
            <p className="text-sm text-accent text-left">September 2014 - November 2020</p>
            <p className="text-sm muted-text text-left">High School Diploma</p>
            <p className="text-sm muted-text text-left">Sydney, Australia</p>
          </div>
        </div>
      </div>

      {/* Leadership & Co-Curricular */}
      <div className="border-t section-divider my-8"></div>

      <h2 className="text-3xl font-bold mb-4 text-white text-left flex items-center">
        <FaUsers className="text-blue-500 mr-4" /> Leadership & Co-Curricular
      </h2>

      <div className="mb-8">
        {/* UNSW Finance and Banking Society */}
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-1">
            <div className="w-3 h-3 mt-1 bg-blue-500 rounded-full"></div>
          </div>
          <div className="ml-4">
          <h3 className="text-xl font-bold text-white text-left">UNSW Finance and Banking Society</h3>
            <p className="text-sm text-accent text-left">February 2021 - September 2023</p>
            <ul className=" text-sm list-disc list-inside muted-text ml-4 text-left">
              <li>HR Subcommittee (February 2021 - September 2021)</li>
              <li>HR Director (September 2021 - September 2022)</li>
              <li>General Secretary (September 2022 - September 2023)</li>
            </ul>
          </div>
        </div>

        {/* 180 Degrees Consulting */}
        <div className="flex items-start mt-8">
          <div className="flex-shrink-0 mt-1">
            <div className="w-3 h-3 mt-1 bg-blue-500 rounded-full"></div>
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-bold text-white text-left">180 Degrees Consulting</h3>
            <p className="text-sm text-accent text-left">February 2021 - May 2022</p>
            <p className="text-sm muted-text text-left">Project Consultant</p>
          </div>
        </div>

        {/* UNSW Marketing Society */}
        <div className="flex items-start mt-8">
          <div className="flex-shrink-0 mt-1">
            <div className="w-3 h-3 mt-1 bg-blue-500 rounded-full"></div>
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-bold text-white text-left">UNSW Marketing Society</h3>
            <p className="text-sm text-accent text-left">February 2024 - August 2024</p>
            <p className="text-sm muted-text text-left">IT Sub-Committee</p>
          </div>
        </div>
      </div>

      

      {/* Skills Section */}
      <div className="border-t section-divider my-8"></div>
      
      <h2 className="text-3xl font-bold mb-4 text-white text-left flex items-center">
        <FaCogs className="text-blue-500 mr-4" /> Skills
      </h2>
      
      <div className="mb-8">
        {/* Skill Item */}
        <div className="flex justify-between mb-2">
          <span className="text-white">Amazon Web Service</span>
          <span className="text-orange-500">Beginner</span>
        </div>
        <div className="bg-gray-700 rounded-full h-2">
          <div className="bg-orange-500 h-2 rounded-full w-1/4"></div> {/* Adjust width for skill level */}
        </div>

        {/* Skill Item */}
        <div className="flex justify-between mb-2 mt-2">
          <span className="text-white">Linux Environment</span>
          <span className="text-purple-500">Proficient</span>
        </div>
        <div className="bg-gray-700 rounded-full h-2">
          <div className="bg-purple-500 h-2 rounded-full w-3/4"></div> {/* Adjust width for skill level */}
        </div>

        {/* Skill Item */}
        <div className="flex justify-between mb-2 mt-2">
          <span className="text-white">Computer Networking</span>
          <span className="text-orange-500">Beginner</span>
        </div>
        <div className="bg-gray-700 rounded-full h-2">
          <div className="bg-orange-500 h-2 rounded-full w-1/4"></div> {/* Adjust width for skill level */}
        </div>

        {/* Skill Item */}
        <div className="flex justify-between mb-2 mt-2">
          <span className="text-white">Cloud Infrastructure</span>
          <span className="text-orange-500">Beginner</span>
        </div>
        <div className="bg-gray-700 rounded-full h-2">
          <div className="bg-orange-500 h-2 rounded-full w-1/4"></div> {/* Adjust width for skill level */}
        </div>

          {/* Skill Item */}
          <div className="flex justify-between mb-2 mt-2">
          <span className="text-white">Automation and Scripting</span>
          <span className="text-blue-500">Intermediate</span>
        </div>
        <div className="bg-gray-700 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full w-2/4"></div> {/* Adjust width for skill level */}
        </div>

        {/* Skill Item */}
        <div className="flex justify-between mb-2 mt-2">
          <span className="text-white">CICD</span>
          <span className="text-blue-500">Intermediate</span>
        </div>
        <div className="bg-gray-700 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full w-2/4"></div> {/* Adjust width for skill level */}
        </div>

        {/* Skill Item */}
        <div className="flex justify-between mb-2 mt-2">
          <span className="text-white">Git</span>
          <span className="text-blue-500">Intermediate</span>
        </div>
        <div className="bg-gray-700 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full w-2/4"></div> {/* Adjust width for skill level */}
        </div>
      </div>

      {/* Coding Skills Section */}
      <div className="border-t section-divider my-8"></div>
      
      <h2 className="text-3xl font-bold mb-4 text-white text-left flex items-center">
        <FaCode className="text-blue-500 mr-4" /> Coding Skills
      </h2>
      
      <div className="mb-8">
        {/* Skill Item */}
        <div className="flex justify-between mb-2">
          <span className="text-white">C</span>
          <span className="text-purple-500">Proficient</span>
        </div>
        <div className="bg-gray-700 rounded-full h-2">
          <div className="bg-purple-500 h-2 rounded-full w-3/4"></div> {/* Adjust width for skill level */}
        </div>

        {/* Skill Item */}
        <div className="flex justify-between mb-2 mt-2">
          <span className="text-white">Python</span>
          <span className="text-purple-500">Proficient</span>
        </div>
        <div className="bg-gray-700 rounded-full h-2">
          <div className="bg-purple-500 h-2 rounded-full w-3/4"></div> {/* Adjust width for skill level */}
        </div>

        {/* Skill Item */}
        <div className="flex justify-between mb-2 mt-2">
          <span className="text-white">Java</span>
          <span className="text-blue-500">Intermediate</span>
        </div>
        <div className="bg-gray-700 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full w-2/4"></div> {/* Adjust width for skill level */}
        </div>

        {/* Skill Item */}
        <div className="flex justify-between mb-2 mt-2">
          <span className="text-white">HTML, CSS, JavaScript</span>
          <span className="text-purple-500">Proficient</span>
        </div>
        <div className="bg-gray-700 rounded-full h-2">
          <div className="bg-purple-500 h-2 rounded-full w-3/4"></div> {/* Adjust width for skill level */}
        </div>

          {/* Skill Item */}
          <div className="flex justify-between mb-2 mt-2">
          <span className="text-white">React & Frontend Development</span>
          <span className="text-orange-500">Beginner</span>
        </div>
        <div className="bg-gray-700 rounded-full h-2">
          <div className="bg-orange-500 h-2 rounded-full w-1/4"></div> {/* Adjust width for skill level */}
        </div>

        {/* Skill Item */}
        <div className="flex justify-between mb-2 mt-2">
          <span className="text-white">Dafny</span>
          <span className="text-blue-500">Intermediate</span>
        </div>
        <div className="bg-gray-700 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full w-2/4"></div> {/* Adjust width for skill level */}
        </div>

        {/* Skill Item */}
        <div className="flex justify-between mb-2 mt-2">
          <span className="text-white">Haskell</span>
          <span className="text-orange-500">Beginner</span>
        </div>
        <div className="bg-gray-700 rounded-full h-2">
          <div className="bg-orange-500 h-2 rounded-full w-1/4"></div> {/* Adjust width for skill level */}
        </div>
      </div>
    </div>
  );
};

export default Resume;
