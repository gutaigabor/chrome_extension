const getMessages = async () => {
  const response = await fetch('http://localhost:3001/messages');
  const messages = await response.json();
  const unreadCount = messages.filter(message => message.read === false)?.length || 0;

  chrome.action.setBadgeText({ text: String(unreadCount) });
  const currentDate = new Date();

  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  const seconds = currentDate.getSeconds().toString().padStart(2, '0');

  const timeString = `${hours}:${minutes}:${seconds}`;
  chrome.storage.local.set({"unreadCount": { lastUpdate: timeString, unreadCount: unreadCount }}, function() {
      console.log('Data saved');
  });
}

chrome.runtime.onStartup.addListener(
  async () => {
    getMessages();
    setInterval(getMessages, 10000);
  }
);