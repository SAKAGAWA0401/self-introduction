import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-8 text-white relative">
      <motion.h1
        className="text-6xl font-bold mb-4 text-shadow"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Portfolio
      </motion.h1>
      
      <motion.div
        className="max-w-4xl w-full space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <section className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <h2 className="text-3xl font-bold mb-4">Operating Now</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white/5 rounded-lg space-y-2">
              <h3 className="text-xl font-semibold">Homepage/Portfolio (This site)</h3>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="w-full md:w-1/3">
                  <img 
                    src="screenshot\screenshot-sloperiver-1280x720.png" 
                    alt="Homepage/Portfolio (This site)" 
                    className="rounded-lg cursor-pointer"
                    onClick={() => window.open('https://sloperiver.com', '_blank')}
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <p className="mt-2 text-sm text-gray-300 whitespace-normal leading-relaxed">
                    {`This website serves as a portfolio of my personal development projects. 
                    Built on the concept of "leveraging generative AI for development," 
                    I used bolt.new for the initial setup and continue to update it with the help of tools like 
                    GitHub Copilot Workspace, Cline (deepseek v3), and ChatGPT. 
                    I'm proud to have built this entire site with a focus on the frontend, 
                    allowing me to host and maintain it completely free of charge.`}
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="w-full md:w-1/3">
                  <h6 className="text-base">Languages & Frameworks:</h6>
                </div>
                <div className="w-full md:w-2/3">
                  <span className="bg-blue-500/20 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-purple-500/20 px-3 py-1 rounded-full text-sm">TypeScript</span>
                  <span className="bg-green-500/20 px-3 py-1 rounded-full text-sm">TailwindCSS</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="w-full md:w-1/3">
                  <h6 className="text-base">Build Tool:</h6>
                </div>
                <div className="w-full md:w-2/3">
                  <span className="bg-yellow-500/20 px-3 py-1 rounded-full text-sm">Vite</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="w-full md:w-1/3">
                  <h6 className="text-base">Deployment & Hosting:</h6>
                </div>
                <div className="w-full md:w-2/3">
                  <span className="bg-indigo-500/20 px-3 py-1 rounded-full text-sm">GitHub Pages</span>
                  <span className="bg-indigo-500/20 px-3 py-1 rounded-full text-sm">GitHub Actions</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="w-full md:w-1/3">
                  <h6 className="text-base">others:</h6>
                </div>
                <div className="w-full md:w-2/3">
                  <span className="bg-gray-500/20 px-3 py-1 rounded-full text-sm">CookieYes</span>
                  <span className="bg-gray-500/20 px-3 py-1 rounded-full text-sm">GA4</span>                
                  <span className="bg-gray-500/20 px-3 py-1 rounded-full text-sm">bolt.new</span>
                  <span className="bg-gray-500/20 px-3 py-1 rounded-full text-sm">cline(Deepseek v3)</span>
                </div>
              </div>              
            </div>

            <div className="p-4 bg-white/5 rounded-lg space-y-2">
              <h3 className="text-xl font-semibold">Blog in Australia</h3>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="w-full md:w-1/3">
                  <img 
                    src="screenshot\screenshot-aus-blog.sloperiver-1280x720.png" 
                    alt="Blog in Australia" 
                    className="rounded-lg cursor-pointer"
                    onClick={() => window.open('https://aus-blog.sloperiver.com', '_blank')}
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <p className="mt-2 text-sm text-gray-300 whitespace-normal leading-relaxed">
                    {`This blog site was originally built to share information during my working holiday in Perth, Australia. 
                    I created it using Next.js v15, which had just been released at the time, 
                    as a way to learn the framework. 
                    It's hosted on Vercel and utilizes ISR for optimal rendering. 
                    I manage the blog content through microCMS, 
                    taking advantage of their free tier to keep operational costs at zero.`}
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="w-full md:w-1/3">
                  <h6 className="text-base">Languages & Frameworks:</h6>
                </div>
                <div className="w-full md:w-2/3">
                  <span className="bg-blue-500/20 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-purple-500/20 px-3 py-1 rounded-full text-sm">TypeScript</span>
                  <span className="bg-green-500/20 px-3 py-1 rounded-full text-sm">TailwindCSS</span>
                  <span className="bg-yellow-500/20 px-3 py-1 rounded-full text-sm">Next.js</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="w-full md:w-1/3">
                  <h6 className="text-base">Deployment & Hosting:</h6>
                </div>
                <div className="w-full md:w-2/3">
                  <span className="bg-indigo-500/20 px-3 py-1 rounded-full text-sm">Vercel</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="w-full md:w-1/3">
                  <h6 className="text-base">CMS:</h6>
                </div>
                <div className="w-full md:w-2/3">
                  <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-sm">microCMS</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="w-full md:w-1/3">
                  <h6 className="text-base">others:</h6>
                </div>
                <div className="w-full md:w-2/3">
                  <span className="bg-gray-500/20 px-3 py-1 rounded-full text-sm">GA4</span>                
                  <span className="bg-gray-500/20 px-3 py-1 rounded-full text-sm">v0</span>
                  <span className="bg-gray-500/20 px-3 py-1 rounded-full text-sm">cline(Deepseek v3)</span>
                </div>
              </div>                            
            </div>

            <div className="p-4 bg-white/5 rounded-lg space-y-2">
              <h3 className="text-xl font-semibold">myglish - remember words</h3>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="w-full md:w-1/3">
                  <img 
                    src="screenshot\screenshot-myglish.sloperiver.com-1280x720.png" 
                    alt="myglish - remember words" 
                    className="rounded-lg cursor-pointer"
                    onClick={() => window.open('https://myglish.sloperiver.com', '_blank')}
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <p className="mt-2 text-sm text-gray-300 whitespace-normal leading-relaxed">
                    {`This app is designed to help me improve my English pronunciation. 
                    My goal was to be able to "hear natural American English pronunciation of phrases I want to use" 
                    and "recognize their phonetic transcriptions." 
                    To achieve this, I used Google's text-to-speech API for audio output and 
                    OpenAI's o4-mini model to generate IPA phonetic symbols. 
                    Since these APIs are pay-as-you-go, I implemented user authentication to restrict access to myself. 
                    This project also marked my first foray into backend development.`}
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="w-full md:w-1/3">
                  <h6 className="text-base">Languages & Frameworks:</h6>
                </div>
                <div className="w-full md:w-2/3">
                  <span className="bg-blue-500/20 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-purple-500/20 px-3 py-1 rounded-full text-sm">JavaScript</span>
                  <span className="bg-green-500/20 px-3 py-1 rounded-full text-sm">TailwindCSS</span>
                  <span className="bg-green-500/20 px-3 py-1 rounded-full text-sm">shadcn/ui</span>
                  <span className="bg-gray-500/20 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-gray-500/20 px-3 py-1 rounded-full text-sm">Express</span>                  
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="w-full md:w-1/3">
                  <h6 className="text-base">Build Tool:</h6>
                </div>
                <div className="w-full md:w-2/3">
                  <span className="bg-yellow-500/20 px-3 py-1 rounded-full text-sm">Vite</span>
                </div>
              </div>  
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="w-full md:w-1/3">
                  <h6 className="text-base">Deployment & Hosting:</h6>
                </div>
                <div className="w-full md:w-2/3">
                  <span className="bg-indigo-500/20 px-3 py-1 rounded-full text-sm">Netlify</span>
                  <span className="bg-indigo-500/20 px-3 py-1 rounded-full text-sm">Render</span>
                </div>
              </div>                          
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="w-full md:w-1/3">
                  <h6 className="text-base">APIs:</h6>
                </div>
                <div className="w-full md:w-2/3">
                  <span className="bg-yellow-500/20 px-3 py-1 rounded-full text-sm">Google Text-to-Speech</span>
                  <span className="bg-yellow-500/20 px-3 py-1 rounded-full text-sm">OpenAI o4-mini</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="w-full md:w-1/3">
                  <h6 className="text-base">Authentication:</h6>
                </div>
                <div className="w-full md:w-2/3">
                  <span className="bg-indigo-500/20 px-3 py-1 rounded-full text-sm">Firebase Auth</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="w-full md:w-1/3">
                  <h6 className="text-base">Database:</h6>
                </div>
                <div className="w-full md:w-2/3">
                  <span className="bg-gray-500/20 px-3 py-1 rounded-full text-sm">Firebase Firestore</span>
                  <span className="bg-gray-500/20 px-3 py-1 rounded-full text-sm">indexedDB</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <h2 className="text-3xl font-bold mb-4">For Learning</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white/5 rounded-lg space-y-2">
              <h3 className="text-xl font-semibold">GIS engineering 1</h3>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="w-full md:w-1/3">
                  <img 
                    src="screenshot\screenshot-advanced-map-study.sloperiver-1280x720.png" 
                    alt="GIS engineering 1" 
                    className="rounded-lg cursor-pointer"
                    onClick={() => window.open('https://advanced-map-study.sloperiver.com', '_blank')}
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <p className="mt-2 text-sm text-gray-300 whitespace-normal leading-relaxed">
                    {`I built this web service to learn about utilizing location data, referencing the following book. 
                    While the project is entirely frontend-based, 
                    it provided a solid foundation in understanding the fundamentals of working with location data.`}
                    <br />
                      <a
                        href="https://www.shuwasystem.co.jp/book/9784798068923.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline hover:text-blue-300"
                      >
                        現場のプロがわかりやすく教える 位置情報エンジニア養成講座
                      </a>
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="w-full md:w-1/3">
                  <h6 className="text-base">Languages & Frameworks:</h6>
                </div>
                <div className="w-full md:w-2/3">
                  <span className="bg-blue-500/20 px-3 py-1 rounded-full text-sm">javascript(Vanilla)</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="w-full md:w-1/3">
                  <h6 className="text-base">Build Tool:</h6>
                </div>
                <div className="w-full md:w-2/3">
                  <span className="bg-yellow-500/20 px-3 py-1 rounded-full text-sm">Vite</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="w-full md:w-1/3">
                  <h6 className="text-base">Deployment & Hosting:</h6>
                </div>
                <div className="w-full md:w-2/3">
                  <span className="bg-indigo-500/20 px-3 py-1 rounded-full text-sm">GitHub Pages</span>
                  <span className="bg-indigo-500/20 px-3 py-1 rounded-full text-sm">GitHub Actions</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="w-full md:w-1/3">
                  <h6 className="text-base">othres:</h6>
                </div>
                <div className="w-full md:w-2/3">
                  <span className="bg-indigo-500/20 px-3 py-1 rounded-full text-sm">python(convert csv→geoJSON)</span>
                  <span className="bg-indigo-500/20 px-3 py-1 rounded-full text-sm">tippecanoe(convert geoJSON→pbf)</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white/5 rounded-lg">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/3">
                  <img 
                    src="https://placehold.co/400x200" 
                    alt="Project 4" 
                    className="rounded-lg cursor-pointer"
                    onClick={() => window.open('https://example.com', '_blank')}
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-semibold">Project 4</h3>
                  <p className="mt-2 text-gray-300">Description of project 4...</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 px-3 py-1 rounded-full text-sm">React</span>
                    <span className="bg-purple-500/20 px-3 py-1 rounded-full text-sm">TypeScript</span>
                    <span className="bg-green-500/20 px-3 py-1 rounded-full text-sm">Tailwind</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-white/5 rounded-lg text-center">React</div>
            <div className="p-4 bg-white/5 rounded-lg text-center">TypeScript</div>
            <div className="p-4 bg-white/5 rounded-lg text-center">Salesforce</div>
            <div className="p-4 bg-white/5 rounded-lg text-center">Data Analysis</div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Portfolio;
