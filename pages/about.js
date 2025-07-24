import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Card from '../themes/hexo/components/Card';
import Badge from '../components/Badge';
import LazyImage from '../components/LazyImage';
import { 
  Heart, 
  Coffee, 
  Gamepad2, 
  Star, 
  Zap, 
  Frown, 
  MessageCircle, 
  User, 
  Award,
  ArrowLeft,
  Briefcase,
  Target,
  Code,
  Music,
  Mountain,
  Camera,
  BookOpen,
  Smile,
  Building2,
  Globe
} from 'lucide-react';

export default function About() {
  const router = useRouter();
  
  // 深色模式切换
  const [isDark, setIsDark] = useState(typeof window !== 'undefined' ? document.documentElement.classList.contains('dark') : false);
  
  const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(document.documentElement.classList.contains('dark'));
  };

  const basicInfo = [
    "2013年计算机专业毕业",
    "12年开发经验，跟随时代的需求，被迫一路进化，从后端开发到数据工程，再到机器学习。",
    "曾使用过C、C#、Java、Scala、Python，还有被逼无奈JSP时代写过点前端，现在似乎每门语言都不太会的状态🥲✨",
    "写过代码，干过 TL，做过 PM，最后还是觉得写代码最省心"
  ];

  const domains = ["通信", "电商销售", "制造", "能源", "石油"];
  const clients = ["华为", "Shell", "隆基绿能", "一汽丰田"];

  const hobbies = [
    "🎸 工作不忙，又不太想上进，预期有这么一段时间的话，比如年底，可能会拾起吉他扒拉一段时间",
    "✍️ 偶尔矫情写一些非技术类文字",
    "🏔️ 爬山、游泳挺喜欢，但似乎很长一段时间没有去过了"
  ];

  const weaknesses = [
    "⏰ 拖延症晚期患者",
    "😰 自制力差，容易分心",
    "🤔 闲着时容易焦虑"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-black dark:via-gray-900 dark:to-blue-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* 科技感背景装饰 */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-[0.02] pointer-events-none"></div>
      
      {/* 顶部导航栏 */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="container mx-auto px-4 py-3 max-w-6xl">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.push('/')}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/20 transition-all duration-200 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="text-sm">返回主页</span>
            </button>
            <div className="text-sm text-gray-600 dark:text-gray-400">个人简介</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        
        {/* Hero Card - 增强科技感 */}
        <Card className="mb-8 border-2 border-blue-500/10 shadow-2xl bg-gradient-to-br from-white via-white to-blue-50/50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/50 backdrop-blur-sm">
          <div className="pt-8 pb-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="relative flex-shrink-0">
                <div className="w-32 h-32 md:w-36 md:h-36 relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 rounded-full opacity-20 blur-sm"></div>
                  <LazyImage
                    src="/images/my-avatar.png"
                    alt="个人照片"
                    className="relative w-full h-full rounded-full object-cover shadow-md ring-2 ring-blue-500/20 hover:scale-110 transition-transform duration-300 cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl mb-2 text-gray-900 dark:text-white bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text">韩荣</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">Backend Dev | Data Engineer | MLE</p>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center justify-center md:justify-start gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <span>rong.han@thoughtworks.com</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </svg>
                    <span>WeChat: hanrongboy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* 基本信息 Section */}
        <div className="mb-8">
          <h2 className="flex items-center gap-2 mb-4 text-gray-900 dark:text-white">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/10 flex items-center justify-center">
              <User size={20} className="text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-lg">Basic Info</span>
          </h2>
          <Card className="border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-900 dark:to-blue-900/50">
            <div className="pt-6 space-y-3">
              {basicInfo.map((line, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                  <span className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">{line}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* 项目经验 Section - 美化标签 */}
        <div className="mb-8">
          <h2 className="flex items-center gap-2 mb-4 text-gray-900 dark:text-white">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/10 flex items-center justify-center">
              <Briefcase size={20} className="text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-lg">Project Experience</span>
          </h2>
          <Card className="border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-900 dark:to-blue-900/50">
            <div className="pt-6 space-y-6">
              <div className="flex items-start gap-3 group">
                <div className="mt-1">
                  <Target className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200" size={16} />
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                    参与交付&咨询过11个项目，领域涉及：
                  </span>
                  <div className="flex gap-2 flex-wrap mt-3">
                    {domains.map((domain, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 text-xs bg-gradient-to-r from-blue-500/10 to-blue-500/5 hover:from-blue-500/20 hover:to-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 hover:scale-105 transition-all duration-200 rounded-md"
                      >
                        {domain}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-3 group">
                <div className="mt-1">
                  <Building2 className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200" size={16} />
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                    合作客户包括：
                  </span>
                  <div className="flex gap-2 flex-wrap mt-3">
                    {clients.map((client, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500/50 to-purple-500/30 hover:from-purple-500/70 hover:to-purple-500/50 border-blue-500/30 text-gray-900 dark:text-white hover:scale-105 transition-all duration-200 rounded-md flex items-center gap-1"
                      >
                        <Globe size={10} />
                        {client}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          </Card>
        </div>

        {/* 证书和徽章 Section */}
        <div className="mb-8">
          <h2 className="flex items-center gap-2 mb-4 text-gray-900 dark:text-white">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/10 flex items-center justify-center">
              <Award size={20} className="text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-lg">Certificates & Badges</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <Card className="border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 group bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-900 dark:to-blue-900/50 hover:border-blue-500/30">
              <div className="pt-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <LazyImage
                    src="/images/cert-pmp.png"
                    alt="PMP证书"
                    className="relative w-full h-full object-contain rounded-lg hover:scale-125 transition-transform duration-300 cursor-pointer"
                  />
                </div>
                <h3 className="mb-1 text-sm text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">Project Management Professional (PMP)</h3>
              </div>
            </Card>

            <Card className="border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 group bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-900 dark:to-blue-900/50 hover:border-blue-500/30">
              <div className="pt-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <LazyImage
                    src="/images/dama.png"
                    alt="DAMA证书"
                    className="relative w-full h-full object-contain rounded-lg hover:scale-125 transition-transform duration-300 cursor-pointer"
                  />
                </div>
                <h3 className="mb-1 text-sm text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">Certified Data Management Professional (CDMP)</h3>
              </div>
            </Card>

            <Card className="border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 group bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-900 dark:to-blue-900/50 hover:border-blue-500/30">
              <div className="pt-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <LazyImage
                    src="/images/professional-machine-learning-engineer-certificatio.png"
                    alt="Google Cloud证书"
                    className="relative w-full h-full object-contain rounded-lg hover:scale-125 transition-transform duration-300 cursor-pointer"
                  />
                </div>
                <h3 className="mb-1 text-sm text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">Google Cloud Certified Professional Machine Learning Engineer</h3>
              </div>
            </Card>

            <Card className="border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 group bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-900 dark:to-blue-900/50 hover:border-blue-500/30">
              <div className="pt-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <LazyImage
                    src="/images/huawei.png"
                    alt="华为云证书"
                    className="relative w-full h-full object-contain rounded-lg hover:scale-125 transition-transform duration-300 cursor-pointer"
                  />
                </div>
                <h3 className="mb-1 text-sm text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">Huawei Cloud Certified Developer Professional - Big Data</h3>
              </div>
            </Card>
          </div>
        </div>

        {/* 我的特色 Section */}
        <div className="mb-8">
          <h2 className="flex items-center gap-2 mb-4 text-gray-900 dark:text-white">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/10 flex items-center justify-center">
              <Star size={20} className="text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-lg">Personal Tag</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* 美食最爱 */}
            <Card className="border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 group bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-900 dark:to-blue-900/50 hover:border-blue-500/20">
              <div className="pt-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-400 dark:from-purple-400 dark:to-purple-300 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Coffee className="text-white" size={20} />
                </div>
                <h3 className="mb-2 text-gray-900 dark:text-white">美食最爱</h3>
                <div className="text-2xl mb-2">🍲</div>
                <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                  想了想，似乎没有最爱，但是在碳水之都，面食是永远的神，火锅什么也都挺喜欢
                </p>
              </div>
            </Card>

            {/* 兴趣爱好 */}
            <Card className="border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 group bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-900 dark:to-blue-900/50 hover:border-blue-500/20">
              <div className="pt-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-400 dark:from-purple-400 dark:to-purple-300 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Gamepad2 className="text-white" size={20} />
                </div>
                <h3 className="mb-2 text-gray-900 dark:text-white">兴趣爱好</h3>
                <div className="text-2xl mb-2">🎮</div>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 text-left">
                  {hobbies.map((hobby, idx) => (
                    <div key={idx} className="flex items-start gap-2 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                      <div className="mt-1">
                        {idx === 0 && <Music size={12} className="text-blue-600 dark:text-blue-400" />}
                        {idx === 1 && <BookOpen size={12} className="text-blue-600 dark:text-blue-400" />}
                        {idx === 2 && <Mountain size={12} className="text-blue-600 dark:text-blue-400" />}
                      </div>
                      <span>{hobby}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* 个人标签 */}
            <Card className="border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 group bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-900 dark:to-blue-900/50 hover:border-blue-500/20">
              <div className="pt-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-400 dark:from-purple-400 dark:to-purple-300 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="text-white" size={20} />
                </div>
                <h3 className="mb-2 text-gray-900 dark:text-white">个人标签</h3>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                  <div className="flex items-center justify-center gap-2">
                    <span>♊</span>
                    <span>双子座</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span>🎭</span>
                    <span>社恐患者</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* 缺点 */}
            <Card className="border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 group bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-900 dark:to-blue-900/50 hover:border-blue-500/20">
              <div className="pt-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-400 dark:from-purple-400 dark:to-purple-300 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="text-white" size={20} />
                </div>
                <h3 className="mb-2 text-gray-900 dark:text-white">缺点</h3>
                <div className="text-2xl mb-2">😅</div>
                                 <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 text-center">
                   {weaknesses.map((weakness, idx) => (
                     <div key={idx} className="flex items-start gap-2 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200 justify-center">
                       <div className="mt-1">
                         {idx === 0 && <Frown size={12} className="text-blue-600 dark:text-blue-400" />}
                         {idx === 1 && <Zap size={12} className="text-blue-600 dark:text-blue-400" />}
                         {idx === 2 && <Smile size={12} className="text-blue-600 dark:text-blue-400" />}
                       </div>
                       <span>{weakness}</span>
                     </div>
                   ))}
                 </div>
              </div>
            </Card>
          </div>
        </div>

        {/* 给未来的话 - 增强科技感 */}
        <Card className="border-2 border-blue-500/30 shadow-2xl bg-gradient-to-br from-blue-500/5 via-white to-purple-500/10 dark:from-blue-500/5 dark:via-gray-900 dark:to-purple-500/10 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-50"></div>
          <div className="text-center relative">
            <div className="flex items-center justify-center gap-2 text-gray-900 dark:text-white py-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/30 to-blue-500/10 flex items-center justify-center">
                <MessageCircle size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-xl">给未来的自己</span>
            </div>
          </div>
          <div className="text-center pb-8 relative">
            <div className="text-4xl mb-4">💌</div>
            <blockquote className="text-lg italic text-gray-900 dark:text-white max-w-2xl mx-auto mb-4 leading-relaxed">
              "希望能参与一些有意思的AI项目中，精进技术，有所成就！"
            </blockquote>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              — 来自2025年7月的自己 ✨
            </div>
          </div>
        </Card>

        {/* Footer */}
        <footer className="text-center mt-8 py-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm">Made by 韩荣 | 2025</p>
        </footer>

        {/* Dark Mode Toggle - 增强设计 */}
        <div className="fixed bottom-6 right-6">
          <button
            onClick={toggleDark}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 text-white shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center border border-blue-500/20 backdrop-blur-sm"
            aria-label="切换深色模式"
          >
            <span className="dark:hidden">🌙</span>
            <span className="hidden dark:inline">☀️</span>
          </button>
        </div>
      </div>
    </div>
  );
} 