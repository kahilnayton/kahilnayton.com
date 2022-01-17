exports.id = 584;
exports.ids = [584];
exports.modules = {

/***/ 584:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _jsxRuntime = __webpack_require__(5282);

var _gr = __webpack_require__(5155);

var _structure = __webpack_require__(7979);

var _lib = __webpack_require__(5997);

const SocialBar = ({
  variant,
  toggleMobile
}) => {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_structure.UnorderedList, {
    className: variant && variant,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_structure.ListItem, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        href: _lib.FACEBOOK_URL,
        target: "blank",
        rel: "noopener noreferrer",
        onClick: toggleMobile,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_gr.GrFacebookOption, {})
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_structure.ListItem, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        href: _lib.INSTAGRAM_URL,
        target: "blank",
        rel: "noopener noreferrer",
        onClick: toggleMobile,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_gr.GrInstagram, {})
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_structure.ListItem, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        href: _lib.TWITTER_URL,
        target: "blank",
        rel: "noopener noreferrer",
        onClick: toggleMobile,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_gr.GrTwitter, {})
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_structure.ListItem, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        href: _lib.YOUTUBE_URL,
        target: "blank",
        rel: "noopener noreferrer",
        onClick: toggleMobile,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_gr.GrYoutube, {})
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_structure.ListItem, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        href: _lib.SPOTIFY_URL,
        target: "blank",
        rel: "noopener noreferrer",
        onClick: toggleMobile,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_gr.GrSpotify, {})
      })
    })]
  });
};

var _default = SocialBar;
exports.default = _default;

/***/ }),

/***/ 5997:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.data = exports.links = exports.SPOTIFY_URL = exports.REGIONAL_URL = exports.BANDCAMP_URL = exports.NFT_URL = exports.INSTAGRAM_URL = exports.TWITTER_URL = exports.FACEBOOK_URL = exports.YOUTUBE_URL = exports.HOME_OG_IMAGE_URL = exports.SITE_URL = exports.SITE_NAME = exports.EXAMPLE_PATH = void 0;
const EXAMPLE_PATH = 'cms-prismic';
exports.EXAMPLE_PATH = EXAMPLE_PATH;
const SITE_NAME = 'music-portfolio';
exports.SITE_NAME = SITE_NAME;
const SITE_URL = 'https://prismic.io/';
exports.SITE_URL = SITE_URL;
const HOME_OG_IMAGE_URL = '';
exports.HOME_OG_IMAGE_URL = HOME_OG_IMAGE_URL;
const YOUTUBE_URL = 'https://youtu.be/9EQHdkZib8g';
exports.YOUTUBE_URL = YOUTUBE_URL;
const FACEBOOK_URL = 'https://www.facebook.com/kahil.nayton';
exports.FACEBOOK_URL = FACEBOOK_URL;
const TWITTER_URL = 'https://twitter.com/kahilnayton';
exports.TWITTER_URL = TWITTER_URL;
const INSTAGRAM_URL = 'https://www.instagram.com/kahilnayton/';
exports.INSTAGRAM_URL = INSTAGRAM_URL;
const NFT_URL = 'https://openzeppelin.com/';
exports.NFT_URL = NFT_URL;
const BANDCAMP_URL = 'https://kahilnayton.bandcamp.com/album/bbep';
exports.BANDCAMP_URL = BANDCAMP_URL;
const REGIONAL_URL = 'https://www.facebook.com/choronyc/';
exports.REGIONAL_URL = REGIONAL_URL;
const SPOTIFY_URL = 'https://open.spotify.com/album/0LVM2RH9zHIgVyyrJDSz1H?si=PZ4ua6NdR3mEad0rJo24oQ';
exports.SPOTIFY_URL = SPOTIFY_URL;
const links = [{
  label: 'New Music',
  href: 'newmusic'
}, {
  label: 'NFT',
  href: 'nft'
}, {
  label: 'Choro',
  href: 'choro'
}, {
  label: 'Video',
  href: 'video'
}, {
  label: 'Bandcamp',
  href: 'bandcamp'
}];
exports.links = links;
const data = {
  newmusic: {
    id: 'newmusic',
    title: 'New Music',
    image: '/public/images/final-color.jpg',
    description: 'Just about to release some new tunes! 2021 was a year of lots of transition and turbulence so writing some new music felt like the best way to get through the whirlwind of change and life upheaval. New music will drop in about a month!',
    link: SPOTIFY_URL,
    linkLable: 'Listen'
  },
  choro: {
    id: 'choro',
    title: 'Choro',
    image: '/public/images/beco.jpeg',
    description: 'Choro (pronounced SHOH-roh) is best described in American terms as "the New Orleans jazz of Brazil." It is a complex popular musical form based on improvisation, and like New Orleans jazz, blues, or ragtime, grew from a formalized musical structure and many worldly influences. But to the people of South America, choro is Brazil. It is life. Our band Regional De NY often plays around NYC, come hang!',
    link: REGIONAL_URL,
    linkLable: 'Upcoming gigs'
  },
  nft: {
    id: 'nft',
    title: 'NFT',
    image: '/public/images/nft.jpeg',
    description: `I'm a bit of a crypto nerd and thought it would be fun to tokenize this new release, so if you want to buy some non fungible tokens or if you are interested in the crypto space. I feel like the way streaming is currently set up musos kinda get a rough deal and although it's early days maybe block chain tech can help empower creatives in the future. Happy to chat about the process if you're interested to learn!`,
    link: NFT_URL,
    linkLable: `Learn about NFT's`
  },
  video: {
    id: 'video',
    title: 'New Video',
    image: '/public/images/vid_preview.jpg',
    description: `Some time ago now, a good mate had an idea for a music clip for one of my songs. The subsequent events that grew out of this idea ended up being quite unexpected… I'll write some more words about it as we finish up because it’s gonna be a tight clip and deserves a place in the world.`,
    link: YOUTUBE_URL,
    linkLable: 'Check out some other vids'
  },
  bandcamp: {
    id: 'bandcamp',
    title: 'Bandcamp',
    image: '/public/images/flowers.png',
    description: `Bandcamp is a great way to show some support, not just for this music, but for all musicians. Spitify pays bugger all to artists so if you like someone's music go buy it on Bandcamp. Some of the guys who played on these tracks have some particularly good stuff.`,
    link: BANDCAMP_URL,
    linkLable: 'Head to bandcamp'
  }
};
exports.data = data;

/***/ }),

/***/ 3923:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SectionMaxWidth = exports.SectionMinHeight = exports.z = exports.burgerTop = exports.headerHeightDesktop = exports.headerHeightMobile = void 0;
const headerHeightMobile = '6rem';
exports.headerHeightMobile = headerHeightMobile;
const headerHeightDesktop = '6rem';
exports.headerHeightDesktop = headerHeightDesktop;
const burgerTop = '3rem';
exports.burgerTop = burgerTop;
const z = {
  content: 1,
  burger: 100
};
exports.z = z;
const SectionMinHeight = '24rem';
exports.SectionMinHeight = SectionMinHeight;
const SectionMaxWidth = '120rem';
exports.SectionMaxWidth = SectionMaxWidth;

/***/ }),

/***/ 6143:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
//Dimensions for device media queries and layout padding
const dimensions = {
  tabletPortraitUp: 750,
  tablet: 900,
  desktop: 1200
};
var _default = dimensions;
exports.default = _default;

/***/ }),

/***/ 7979:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.VStack = exports.ListItem = exports.UnorderedList = exports.FooterContainer = exports.LottieContainer = exports.Column = exports.Container = exports.Wrap = exports.Inner = void 0;

var _styledComponents = _interopRequireDefault(__webpack_require__(9914));

var _dimensions = _interopRequireDefault(__webpack_require__(6143));

var _constants = __webpack_require__(3923);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Inner = _styledComponents.default.div.withConfig({
  displayName: "structure__Inner",
  componentId: "sc-3g82sj-0"
})(["position:relative;width:100%;margin:0 auto;height:100%;max-width:", ";padding-top:4rem;@media (min-width:", "px){padding-top:6rem;}@media (min-width:", "px){max-width:126.4rem;}"], _constants.SectionMaxWidth, _dimensions.default.tablet, _dimensions.default.desktop);

exports.Inner = Inner;

const Wrap = _styledComponents.default.div.withConfig({
  displayName: "structure__Wrap",
  componentId: "sc-3g82sj-1"
})(["position:relative;width:100%;max-width:97.4rem;margin:0 auto;"]);

exports.Wrap = Wrap;

const Container = _styledComponents.default.div.withConfig({
  displayName: "structure__Container",
  componentId: "sc-3g82sj-2"
})(["margin:auto;margin-top:24px;min-height:", ";flex-direction:column;display:flex;align-items:start;height:100%;gap:1.8rem;@media (min-width:", "px){gap:2.4rem;flex-direction:", ";}"], _constants.SectionMinHeight, _dimensions.default.tablet, p => p.reverse ? "row" : "row-reverse");

exports.Container = Container;

const Column = _styledComponents.default.div.withConfig({
  displayName: "structure__Column",
  componentId: "sc-3g82sj-3"
})(["flex:1;display:flex;justify-content:center;flex-direction:column;align-items:start;margin:auto;"]);

exports.Column = Column;

const LottieContainer = _styledComponents.default.div.withConfig({
  displayName: "structure__LottieContainer",
  componentId: "sc-3g82sj-4"
})(["position:absolute;bottom:0;right:0;"]);

exports.LottieContainer = LottieContainer;

const FooterContainer = _styledComponents.default.div.withConfig({
  displayName: "structure__FooterContainer",
  componentId: "sc-3g82sj-5"
})(["display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;margin:auto;height:40rem;max-width:", ";padding:16px;background-color:", ";@media (min-width:", "px){flex-direction:row;padding:24px;padding-top:4rem;}"], _constants.SectionMaxWidth, ({
  theme
}) => theme.backgroundAlt, _dimensions.default.tablet);

exports.FooterContainer = FooterContainer;

const UnorderedList = _styledComponents.default.ul.withConfig({
  displayName: "structure__UnorderedList",
  componentId: "sc-3g82sj-6"
})(["display:flex;justify-content:flex-end;&.burger{border:solid;height:20rem;width:20rem;position:absolute;inset:0;margin:auto;animation-name:slideUpFade;}"]);

exports.UnorderedList = UnorderedList;

const ListItem = _styledComponents.default.li.withConfig({
  displayName: "structure__ListItem",
  componentId: "sc-3g82sj-7"
})(["display:inline-block;position:relative;top:0.3rem;width:5rem;"]);

exports.ListItem = ListItem;

const VStack = _styledComponents.default.div.withConfig({
  displayName: "structure__VStack",
  componentId: "sc-3g82sj-8"
})(["display:flex;flex-direction:column;padding-top:", "rem;"], ({
  spacingTop
}) => spacingTop);

exports.VStack = VStack;

/***/ })

};
;