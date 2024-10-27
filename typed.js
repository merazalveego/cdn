/*!
*     Animated Graphic Design Search Box - JavaScript Typing Animation Integration
*     Author: Meraz Alvee
*     Contact: hi@plpfiles.com
*     Website: https://www.plpfiles.com
*     Version: 1.3
*     License: MIT License (https://opensource.org/licenses/MIT)
*     GitHub Repository: https://github.com/merazalveego/cdn/typed.js
*/


document.head.appendChild(style);const searchInput=document.getElementById(&quot;search&quot;),items=[&quot;logo&quot;,&quot;bunner&quot;,&quot;thumbnail&quot;,&quot;posters&quot;,&quot;flyer&quot;,&quot;banner&quot;,&quot;infographic&quot;,&quot;mockup&quot;,&quot;advertisement&quot;,&quot;brochure&quot;];let currentIndex=0;function typePlaceholder(){let e=items[currentIndex],r=0;searchInput.placeholder=&quot;Search for &quot;;let l=setInterval(()=&gt;{searchInput.placeholder+=e.charAt(r),++r===e.length&amp;&amp;(clearInterval(l),setTimeout(()=&gt;{clearPlaceholder(e.length)},2e3))},200)}function clearPlaceholder(e){let r=e,l=setInterval(()=&gt;{searchInput.placeholder=searchInput.placeholder.slice(0,-1),0==--r&amp;&amp;(clearInterval(l),currentIndex=(currentIndex+1)%items.length,typePlaceholder())},100)}typePlaceholder();
