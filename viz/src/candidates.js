const christinaTime = [
    {
      speaker: "Stephanie",
      text: "Hi I'm Stephanie.",
      time: 0,
      stats: {
        anger: 0,
        disgust: 0,
        fear: 0,
        joy: 0,
        sadness: 0,
      },
    },
    {
      speaker: "Christina",
      text: "Hi I'm Christina, it's nice to meet you.",
      time: 1,
      stats: {
        anger: 12,
        disgust: 10,
        fear: 8,
        joy: 77,
        sadness: 12,
      },
    },
    {
      speaker: "Stephanie",
      text: "It's nice to meet you too. So tell me a little bit about yourself. Why are you interested in this job?",
      time: 3,
      stats: {
        anger: 12,
        disgust: 10,
        fear: 8,
        joy: 77,
        sadness: 12,
      },
    },
    {
      speaker: "Christina",
      text: "So I'm a computer science major and I'm going to be a junior. I feel like I've always stood out because of my ability to solve difficult problems and in particular, solving programming problems. I've taken the hardest classes at school and people come to we when they are stuck. I'm good at helping people when they have questions and don't understand things and I respond in a way that's to the point. I haven't been challenged in my past jobs, and just need a change.",
      time: 8,
      stats: {
        anger: 34,
        disgust: 24,
        fear: 54,
        joy: 7,
        sadness: 29,
      },
    },
    {
      speaker: "Stephanie",
      text: "What has been your prior experience working on teams?",
      time: 30,
      stats: {
        anger: 24,
        disgust: 43,
        fear: 11,
        joy: 29,
        sadness: 18,
      },
    },
    {
      speaker: "Christina",
      text: "On a team I usually take a leadership position and guide the team in the right direction. My teammates generally turn to me for technical expertise and I enjoy helping them. I'm very quick with my own assignments so I have time to help others and seek out more responsibilities.",
      time: 32,
      stats: {
        anger: 28,
        disgust: 10,
        fear: 27,
        joy:44,
        sadness: 20,
      },
    },
    {
      speaker: "Stephanie",
      text: "Tell me about a challenge you've faced and how you worked to overcome it.",
      time: 47,
      stats: {
        anger: 50,
        disgust: 21,
        fear: 57,
        joy: 4,
        sadness: 11,
      },
    },
    {
      speaker: "Christina",
      text: "On my last team our project did not turn out well. Although I fulfilled my own responsibilities ahead of time, many of my other teammates failed to reach the milestones we had agreed upon months in advance. They lacked coordination and inspiration, and thus we were way behind schedule leading up to the final product launch. I ended up having to take on their responsibilities in addition to my own. If I hadn't done this the project would have been a complete failure!",
      time: 51,
      stats: {
        anger: 34,
        disgust: 29,
        fear: 47,
        joy: 9,
        sadness: 22,
      },
    },
    {
      speaker: "Stephanie",
      text: "What is one accomplishment you're proud of?",
      time: 74,
      stats: {
        anger: 10,
        disgust: 12,
        fear: 33,
        joy: 44,
        sadness: 24,
      },
    },
    {
      speaker: "Christina",
      text: "Yeah, so during a Hackathon that I participated in freshman year, there was a coding competition that involved solving puzzles as quickly as possible. Although most people worked in teams of two to four, I decided to work by myself for an added challenge. I ended up getting second place out of fifty teams, and the team that had beaten me was a group of four seniors. Obviously, I was happy with my performance, especially because I knew this meant that I was better than my coworkers.",
      time: 78,
      stats: {
        anger: 39,
        disgust: 22,
        fear: 16,
        joy: 9,
        sadness: 46,
      },
    },
    {
      speaker: "Stephanie",
      text: "What are your strengths and weaknesses?",
      time: 101,
      stats: {
        anger: 29,
        disgust: 24,
        fear: 52,
        joy: 17,
        sadness: 8,
      },
    },
    {
      speaker: "Christina",
      text: "My weaknesses are that I'm a perfectionist and I'm too focused on details and sometimes can't see the bigger picture. Sometimes it gets in the way of my progress. I think this weakness is also a strength because I am efficient.",
      time: 104,
      stats: {
        anger: 46,
        disgust: 10,
        fear: 49,
        joy: 15,
        sadness: 31,
      },
    },
    {
      speaker: "Stephanie",
      text: "What are your top three priorities in choosing a place to work at?",
      time: 116,
      stats: {
        anger: 21,
        disgust: 16,
        fear: 18,
        joy: 32,
        sadness: 34,
      },
    },
    {
      speaker: "Christina",
      text: "I look for challenging work to keep me mentally stimulated and I think it's important that my coworkers aren't lazy. I also look at potential for growth within a company and a fast-paced environment.",
      time: 120,
      stats: {
        anger: 21,
        disgust: 17,
        fear: 19,
        joy: 48,
        sadness: 25,
      },
    },
    {
      speaker: "Stephanie",
      text: "And finally do you have any questions for me?",
      time: 129,
      stats: {
        anger: 6,
        disgust: 14,
        fear: 40,
        joy: 38,
        sadness: 30,
      },
    },
    {
      speaker: "Christina",
      text: "I don't have any questions right now, I already know alot of people in the company and I've talked to them before about the environment.",
      time: 132,
      stats: {
        anger: 21,
        disgust: 40,
        fear: 20,
        joy: 8,
        sadness: 60,
      },
    },
    {
      speaker: "Stephanie",
      text: "Great thank you.",
      time: 138,
      stats: {
        anger: 3,
        disgust: 1,
        fear: 4,
        joy: 97,
        sadness: 3,
      },
    },
];

const stephanieTime = [
    {
      speaker: "Christina",
      text: "Hi I'm Christina it's nice to meet you.",
      time: 0,
      stats: {
        anger: 25,
        disgust: 13,
        fear: 9,
        joy: 59,
        sadness: 22,
      },
    },
    {
      speaker: "Stephanie",
      text: "Hi I'm Stephanie.",
      time: 3,
      stats: {
        anger: 0,
        disgust: 0,
        fear: 0,
        joy: 0,
        sadness: 0,
      },
    },
    {
      speaker: "Christina",
      text: "So tell me about yourself. Why do you want this job?",
      time: 4,
      stats: {
        anger: 51,
        disgust: 9,
        fear: 12,
        joy: 14,
        sadness: 29,
      },
    },
    {
      speaker: "Stephanie",
      text: "I'm a rising junior majoring in computer science. And I've worked on both backend and frontend and am willing to learn any new tools and take on a variety of responsibilities. In addition to challenging myself with my classes, I've also worked on a few side projects with my classmates and I found those to be very rewarding. I'm passionate about the product that you guys are developing, and I think the company would be a great environment for me to work in. As a result, I feel like I'm an ideal candidate for this position. I'm hardworking, creative, and a fast learner.",
      time: 7,
      stats: {
        anger: 31,
        disgust: 18,
        fear: 46,
        joy: 20,
        sadness: 9,
      },
    },
    {
      speaker: "Christina",
      text: "So what has been your prior experience working on teams?",
      time: 36,
      stats: {
        anger: 22,
        disgust: 38,
        fear: 10,
        joy: 28,
        sadness: 25,
      },
    },
    {
      speaker: "Stephanie",
      text: "I trust my teammates a lot and have become very close to my old teammates. I'm very adaptable and have held a variety of roles on different teams. If there is a need for a leader, I will step up and create goals for the team, but I also think there is a lot of value is listening to others and letting others initiate ideas. I like to make sure that everyone is heard and that we are working together towards a goal we all are passionate about. In my experience, it has made working in groups very enjoyable, and I've learned a lot from my teammates and collaborations.",
      time: 39,
      stats: {
        anger: 24,
        disgust: 10,
        fear: 48,
        joy: 41,
        sadness: 11,
      },
    },
    {
      speaker: "Christina",
      text: "Tell me about a challenge you've faced and how you overcame it.",
      time: 67,
      stats: {
        anger: 49,
        disgust: 21,
        fear: 57,
        joy: 4,
        sadness: 11,
      },
    },
    {
      speaker: "Stephanie",
      text: "I was once on a team that had a member who was very smart, but stubborn and felt as if he didn't need others' input. It was sometimes difficult to work with him because we wanted the group to succeed as a whole. After a few repeated situations, I approached him individually and how he felt towards the team and his thought processes. It turns out that he felt as if his ideas weren't valued, so we made an effort to acknowledge his contributions and discuss his recommendations. I thought this was an innovative solution to our problem.",
      time: 71,
      stats: {
        anger: 60,
        disgust: 55,
        fear: 24,
        joy: 9,
        sadness: 29,
      },
    },
    {
      speaker: "Christina",
      text: "What is one accomplishment you're most proud of?",
      time: 99,
      stats: {
        anger: 10,
        disgust: 12,
        fear: 33,
        joy: 44,
        sadness: 24,
      },
    },
    {
      speaker: "Stephanie",
      text: "Last semester, I worked on a team that was developing an internal product. As a team, we felt that we had created a very useful tool and had many applications throughout the company. However, we had very few users initially, which was frustrating because we knew our product had the potential to be great. By using our connections and continuing to believe in our product, we were able to convince the majority of the company to switch over to our platform and we've received great reviews since.",
      time: 102 ,
      stats: {
        anger: 39,
        disgust: 23,
        fear: 11,
        joy: 31,
        sadness: 11,
      },
    },
    {
      speaker: "Christina",
      text: "What are your strengths and weaknesses?",
      time: 130,
      stats: {
        anger: 29,
        disgust: 24,
        fear: 52,
        joy: 17,
        sadness: 8,
      },
    },
    {
      speaker: "Stephanie",
      text: "My strengths are my communication with my team, ability to adapt to the situation, and willingness to fill different roles. My weakness is sometimes not sticking up for my own ideas when other people disagree with them. I think this makes me open-minded, but I still need to work on my confidence and there's always room for improvement!",
      time: 132,
      stats: {
        anger: 57,
        disgust: 15,
        fear: 22,
        joy: 13,
        sadness: 17,
      },
    },
    {
      speaker: "Christina",
      text: "What are your top three priorities in choosing a place to work at?",
      time: 152,
      stats: {
        anger: 25,
        disgust: 18,
        fear: 18,
        joy: 28,
        sadness: 26,
      },
    },
    {
      speaker: "Stephanie",
      text: "The company and team dynamic are most important to me. I believe that if you are working in an environment that you feel comfortable in, you will be your most creative self. In addition, I look for work that is both challenging and socially impactful, and I think that this company meets all those requirements.",
      time: 155,
      stats: {
        anger: 18,
        disgust: 31,
        fear: 24,
        joy: 38,
        sadness: 15,
      },
    },
    {
      speaker: "Christina",
      text: "Cool. And finally, do you have any questions for me?",
      time: 171,
      stats: {
        anger: 6,
        disgust: 18,
        fear: 30,
        joy: 54,
        sadness: 25,
      },
    },
    {
      speaker: "Stephanie",
      text: "I'd love to hear how you came to be working at the company and your thoughts about it. I love working with others and hearing about their opinions.",
      time: 173,
      stats: {
        anger: 6,
        disgust: 36,
        fear: 17,
        joy: 63,
        sadness: 21,
      },
    },
];

const christinaStats = {
  openness: 0.10,
  conscientiousness: 0.37,
  extraversion: 0.29,
  agreeableness: 0.82,
  neuroticism: 0.96,
  team: 0.58
};

const stephanieStats = {
  openness: 0.08,
  conscientiousness: 0.20,
  extraversion: 0.70,
  agreeableness: 0.91,
  neuroticism: 0.94,
  team: 0.72
};

const candidates = [

  {
    interviews: [
      {
        type: 'Behavioral',
        interviewer: 'Christina Huang',
        selected: true,
        stats: stephanieStats,
        events: stephanieTime,
      },
      {
        type: 'Distributed Systems',
        interviewer: 'Jeff Dean',
      },
      {
        type: 'Algorithms',
        interviewer: 'Sanjay Gupta',
      },
    ],
    interviewee: {
      name: 'Stephanie Liu',
      role: 'Product Management Candidate',
      phone: '(429) 496-7295',
      email: 'me@stephanieli.net',
      img: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-1/c0.0.320.320/p320x320/993583_1263332900361874_5964928280633604850_n.jpg?oh=aa485ae9a4732065e1cd632d1a823266&oe=5823DAF9',
      video: 'outputStephanie.mp4',
      reimbursement: '$90.00',
      link: "http://3ae00a99.ngrok.io/stephanie"
    },
  },

  {
    interviews: [
      {
        type: 'Behavioral',
        interviewer: 'Stephanie Liu',
        selected: true,
        stats: christinaStats,
        events: christinaTime
      },
      {
        type: 'Distributed Systems',
        interviewer: 'Jeff Dean',
      },
      {
        type: 'Algorithms',
        interviewer: 'Sanjay Gupta',
      },
    ],
    interviewee: {
      name: 'Christina Huang',
      role: 'Software Engineering Candidate',
      phone: '(214) 748-3647',
      email: 'christina@huang.me',
      img: 'https://scontent-sjc2-1.xx.fbcdn.net/t31.0-1/c310.288.506.506/s320x320/12640447_10153966061824456_2299979010115510151_o.jpg',
      video: 'outputChristina.mp4',
      reimbursement: '$70.00',
      link: "http://3ae00a99.ngrok.io/christina"
    },
  },

  {
    interviewee: {
      name: 'Bob Marley',
      role: 'Peace Warrior',
    }
  },

];

export default candidates;
