import React from 'react';
import { GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here you'll find more information about me, what I do, and my current skills in terms of programming and technology
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-indigo-100 shadow-md flex-shrink-0">
              <img 
                src="/IMG20230217143241-01.jpeg" 
                alt="Professional headshot" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 sm:mt-2">Get to know me!</h3>
              <p className="text-gray-600">
                I'm passionate about creating beautiful, functional websites and applications that solve real-world problems.
              </p>
            </div>
            
            <div className="space-y-4 text-gray-600 mt-6">
              <p>
                I'm a <strong>MERN Stack Web Developer</strong> building the Front-end and Back-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
              </p>
              <p>
                I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to connect or follow me on my LinkedIn where I post useful content related to Web Development and Programming.
              </p>
              <p>
                I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
              </p>
            </div>
            <a 
              href="#contact" 
              className="inline-block mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
            >
              Contact Me
            </a>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-6">My Education</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">B.TECH AIT</h4>
                  <p className="text-indigo-600">Anand Agricultural University (2021 - 2026)</p>
                  <p className="text-gray-600 mt-2">
                    Graduated with honors, specializing in web technologies and software engineering.
                  </p>
                  <p className="text-gray-600 mt-2">CGPA: 6.3</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Higher Secondary Certificate (HSC)</h4>
                  <p className="text-indigo-600">Royal Science school-Dhoraji (2012 - 2014)</p>
                  <p className="text-gray-600 mt-2">
                    Focused on Science with a concentration in Mathematics and Physics.
                  </p>
                  <p className="text-gray-600 mt-2">Percentage: 77%</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Secondary School Certificate (SSC)</h4>
                  <p className="text-indigo-600">Karmyog Vidhyalaya-JamKalyanpur (2010 - 2012)</p>
                  <p className="text-gray-600 mt-2">
                    Completed with distinction, specializing in Science.
                  </p>
                  <p className="text-gray-600 mt-2">Percentage: 81%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
