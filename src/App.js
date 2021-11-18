import './App.css';
import { useState } from 'react';
import StatisticCard from './components/StatisticCard/StatisticCard';
import StatisticTitle from './components/StatisticTitle/StatisticTitle';
import FeedbackButton from './components/FeedbackButton/FeedbackButton';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

import React from 'react';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = feedBack => {
    // console.log(feedBack);
    switch (feedBack) {
      case 'good':
        setGood(good => good + 1);
        break;

      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;

      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = (good, neutral, bad) => good + neutral + bad;

  const countPositiveFeedbackPercentage = (good, neutral, bad) =>
    Math.round((good * 100) / countTotalFeedback(good, neutral, bad));

  const total = countTotalFeedback(good, neutral, bad);
  const positivePercentage = countPositiveFeedbackPercentage(
    good,
    neutral,
    bad,
  );

  return (
    <div className="App">
      <StatisticCard>
        <StatisticTitle title="Please leave feedback" />
        <FeedbackButton
          options={['good', 'neutral', 'bad']}
          onIncrement={handleIncrement}
        />
        <StatisticTitle title="Statistics" />
        {countTotalFeedback(good, neutral, bad) > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </StatisticCard>
    </div>
  );
}

export default App;

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleIncrement = feedBack => {
//     // console.log(feedBack);
//     this.setState(prevState => ({
//       [feedBack]: prevState[feedBack] + 1,
//     }));
//   };

//   countTotalFeedback = (good, neutral, bad) => good + neutral + bad;

//   countPositiveFeedbackPercentage = (good, neutral, bad) =>
//     Math.round((good * 100) / this.countTotalFeedback(good, neutral, bad));

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback(good, neutral, bad);
//     const positivePercentage = this.countPositiveFeedbackPercentage(
//       good,
//       neutral,
//       bad,
//     );

//     return (
//       <div className="App">
//         <StatisticCard>
//           <StatisticTitle title="Please leave feedback" />
//           <FeedbackButton
//             options={this.state}
//             onIncrement={this.handleIncrement}
//           />
//           <StatisticTitle title="Statistics" />
//           {this.countTotalFeedback(good, neutral, bad) > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           ) : (
//             <Notification message="No feedback given" />
//           )}
//         </StatisticCard>
//       </div>
//     );
//   }
// }

// export default App;
