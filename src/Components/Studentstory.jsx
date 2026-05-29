import React from 'react';
import Reviewer1 from '../assets/reviewer1.png';
import Reviewer2 from '../assets/reviewer2.png';
import Reviewer3 from '../assets/reviewer3.png';
import MentorImg from '../assets/mentor.png';
import './Studentstory.css';

export default function Studentstory() {
  const stories = [
    { id: 1, avatar: Reviewer1 },
    { id: 2, avatar: Reviewer2 },
    { id: 3, avatar: Reviewer3 },
    { id: 4, avatar: Reviewer1 },
    { id: 5, avatar: Reviewer2 },
    { id: 6, avatar: Reviewer3 }
  ];

  return (
    <section className="studentStorySection" id="successStories">
      <div className="studentStoryContent">
        <div className="storyBadge">
          Student success stories
        </div>

        <span className="storySubtitle">
          See How Our Students Made Their
        </span>

        <div className="storyHeaderRow">
          <h2 className="storyHeading">
            150+Students Got placed.<span className="partyEmoji">🥳</span>
          </h2>

          <div className="socialProofWrapper">
            <div className="socialAvatars">
              <img src={Reviewer1} alt="Student" className="socialAvatar" />
              <img src={Reviewer2} alt="Student" className="socialAvatar" />
              <img src={Reviewer3} alt="Student" className="socialAvatar" />
              <img src={MentorImg} alt="Student" className="socialAvatar" />
            </div>
            <span className="socialText">Success stories 150+ got placed</span>
          </div>
        </div>

        <div className="storyGrid">
          {stories.map((story) => (
            <div className="storyCard" key={story.id}>
              <p className="storyCardQuote">
                "Meet Ellen Daly, a dedicated student who transformed her academic journey through hard work and perseverance. <strong className="highlightText">After struggling in her first year, she sought help from her professors and joined study groups.</strong> By her final year, she graduated with honors and landed her dream job at a leading tech company. Her story inspires others to believe in their potential and seek support when needed."
              </p>

              <div className="storyCardFooter">
                <div className="storyCardMeta">
                  <h4 className="storyCardName">Ellen Daly</h4>
                  <span className="storyCardRole">UI/UX Designer, Sundown Lines</span>
                </div>
                <div className="storyCardAvatarWrapper">
                  <img src={story.avatar} alt="Ellen Daly" className="storyCardAvatar" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="storyCallbackBtn" aria-label="Request a Callback" onClick={() => window.showToast()}>
          <span>Request a Callback</span>
          <svg viewBox="0 0 24 24" width="18" height="18" className="btnArrow">
            <path fill="currentColor" d="M16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8-1.41 1.41z"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
