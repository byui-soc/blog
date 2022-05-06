// Menu Functions
import { isElement, writeById, createLink, getFilename, urlExists, getBase, createLMNT, appendNestLMNT, appendLMNT } from './utilities.js';

const newsFeed202202spring = [
    {
        "url": "https://threatpost.com/dns-bug-millions-routers-iot-risk/179478/",
        "title": "Unpatched DNS Bug Puts Millions of Routers, IoT Devices at Risk",
        "desc": "In a DNS poisoning attack– also known as DNS spoofing and DNS cache poisoning–an attacker deceives a DNS client into accepting a forged response. This forces a program to perform network communications with an arbitrarily defined endpoint instead of the legitimate one.",
        "week": "03",
        "sort": "2022-05-02",
        "date": "02 May 2022",
        "accessed": "05 May 2022",
        "img": "DNS-Attack.jpg"
    },
    {
        "url": "https://threatpost.com/bad-actors-remote-everything/179458/",
        "title": "Bad Actors Are Maximizing Remote Everything",
        "desc": "As hybrid work and learning become embedded paradigms in our culture, there are fewer layers of protection between malware and would-be victims. And bad actors are gaining access to more tools to help them pull off their nefarious deeds – like exploit kits. At the same time, the attack surface has rapidly expanded and continues to do so.",
        "week": "03",
        "sort": "2022-05-02",
        "date": "05/02/2022",
        "accessed": "05 May 2022",
        "img": "Work-from-Home-WFH.jpg"
    },
    {
        "url": "https://www.cnet.com/tech/services-and-software/best-password-manager/",
        "title": "Best Password Manager to Use for 2022",
        "desc": "A password manager is essentially an encrypted digital vault that stores secure password login information you use to access apps and accounts on your mobile device, websites and other services. Image by <a href='https://unsplash.com/@moneyphotos'>olieman.eth on Unsplash.com</a>",
        "week": "03",
        "sort": "2022-05-02",
        "date": "05 May 2022",
        "accessed": "05 May 2022",
        "img": "olieman-eth-q7h8LVeUgFU-unsplash.jpg"
    },
    {
        "url": "https://threatpost.com/the-future-of-executive-protection-is-digital/179469/",
        "title": "The Future of Executive Protection is Digital",
        "desc": "...it’s no longer enough to surround executives with physical guardrails and James Bond-like security detail. Companies spend millions to protect executives’ physical security and their digital lives at work, but they won’t truly be safe unless they are protected in their personal digital lives, as well. Image by <a href='https://unsplash.com/@robsarm'>Rob Sarmiento on Unsplash.com</a>",
        "week": "03",
        "sort": "2022-05-02",
        "date": "04 May 2022",
        "accessed": "05 May 2022",
        "img": "rob-sarmiento-MZnuRv1ZASk-unsplash.jpg"
    },
    {
        "url": "https://www.cnbc.com/video/2022/05/04/cybersecurity-firm-cybereason-uncovers-chinese-espionage-campaign.html",
        "title": "Cybersecurity firm Cybereason uncovers Chinese espionage campaign",
        "desc": "Video: A top cybersecurity company is pulling back the curtain on a hacking campaign aimed at stealing American intellectual property. CNBC’s Eamon Javers joins ‘Squawk Box’ with the details.",
        "week": "03",
        "sort": "2022-05-04",
        "date": "04 May 2022",
        "accessed": "05 May 2022",
        "img": "xxxx"
    },
    {
        "url": "xxxxx",
        "title": "xxxxx",
        "desc": "xxxxx",
        "week": "03",
        "sort": "2022-05-02",
        "date": "02 May 2022",
        "accessed": "05 May 2022",
        "img": "xxxx"
    },
    {
        "url": "xxxxx",
        "title": "xxxxx",
        "desc": "xxxxx",
        "desc": "xxxxx",
        "week": "03",
        "sort": "2022-05-02",
        "date": "02 May 2022",
        "accessed": "05 May 2022",
        "img": "xxxx"
    },
    {
        "url": "xxxxx",
        "title": "xxxxx",
        "desc": "xxxxx",
        "week": "03",
        "sort": "2022-05-02",
        "date": "02 May 2022",
        "accessed": "05 May 2022",
        "img": "xxxx"
    },
    {
        "url": "xxxxx",
        "title": "xxxxx",
        "desc": "xxxxx",
        "week": "03",
        "sort": "2022-05-02",
        "date": "02 May 2022",
        "accessed": "05 May 2022",
        "img": "xxxx"
    },
    {
        "url": "xxxxx",
        "title": "xxxxx",
        "desc": "xxxxx",
        "week": "03",
        "sort": "2022-05-02",
        "date": "02 May 2022",
        "accessed": "05 May 2022",
        "img": "xxxx"
    },
    {
        "url": "xxxxx",
        "title": "xxxxx",
        "desc": "xxxxx",
        "week": "03",
        "sort": "2022-05-02",
        "date": "02 May 2022",
        "accessed": "05 May 2022",
        "img": "xxxx"
    },
    {
        "url": "https://threatmap.checkpoint.com/",
        "title": "Live Cyber Threat Map",
        "desc": "Shows cyber attacks around the world in real time",
        "date": "02 May 2022",
        "week": "03",
        "sort": "2022-05-02",
        "accessed": "05 May 2022",
        "img": "xxxx"
    }
];

function createNav(array, id) {
    // create link list container element
    if (isElement(id)) {
      const container = document.getElementById(id);
      // sort array by name
      array.sort(function(a, b) {
        var nameA = a.week + a.sort + a.title; // make non-case-sensitive
        var nameB = b.week + b.sort + a.title; // make non-case-sensitive
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      // create link list element
      let menu = '<div id="newsfeed-container">';
      // get list of files to create links for each menu entry
      array.forEach((element) => {
            // TODO: save as variable for adding to index.html page as parameter? (${element.tech})
            menu += `<div class="flipcard">`;
            menu += `<div class="flipcard-inner">`;
            menu += `<div class="flipcard-front">`;
            menu += `<img src="./img/${element.img}" alt="${element.title}" style="width:300px; height:200px;">`;
            menu += `</div>`;
            menu += `<div class="flipcard-back">`;
            menu += `<h6><a href="${element.url}">${element.title}</a></h6>`;
            menu += `<p>Article Date: ${element.date} Accessed: ${element.accessed}</p>`;
            menu += `<p>"${element.desc}"</p>`;
            menu += `</div> </div> </div> `;
      });
      menu += "</div>";
      container.innerHTML = menu;
      return;
    }
}
createNav(newsFeed202202spring,'newsfeed');
