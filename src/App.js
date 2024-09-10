import './App.css'

import {Component} from 'react'

import History from './components/History'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {search: '', historyList: initialHistoryList}

  searchHistory = event => {
    this.setState({search: event.target.value})
  }

  onDelete = id => {
    const {historyList} = this.state
    const filteredHistory = historyList.filter(
      eachHistoryItem => eachHistoryItem.id !== id,
    )
    this.setState({historyList: filteredHistory})
  }

  render() {
    const {search, historyList} = this.state
    const filterHistoryList = historyList.filter(eachHistoryItem =>
      eachHistoryItem.title.toLowerCase().includes(search.toLowerCase()),
    )
    let noHistoryList = filterHistoryList.length === 0
    return (
      <div className="main-con">
        <div className="header">
          <img
            className="history-image"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          />
          <div className="search-input-con">
            <div className="search-image-con">
              <img
                className="search-image"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </div>
            <div className="input-con">
              <input
                className="input"
                value={search}
                type="search"
                placeholder="Search history"
                onChange={this.searchHistory}
              />
            </div>
          </div>
        </div>
        {noHistoryList ? (
          <p className="empty-history">There is no history to show</p>
        ) : (
          <ul className="history-list">
            {filterHistoryList.map(eachHistoryItem => (
              <History
                eachHistoryItem={eachHistoryItem}
                key={eachHistoryItem.id}
                onDelete={this.onDelete}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default App
