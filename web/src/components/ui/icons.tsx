import * as React from 'react';

const Icon = (path: string, title = '') => ({ children, ...props }: any) => (
  <img src={path} title={title} {...props} />
);

let idCounter = 0;
function uniqueIcon(component: (id: number, props: any) => React.ReactNode) {
  return class extends React.Component<any> {
    id = idCounter++;

    render() {
      return component(this.id, this.props);
    }
  };
}

export const ArrowLeft = uniqueIcon((id, props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
    <defs>
      <path
        id={'a' + id}
        d="M18 7c0 .6-.4 1-1 1H3.4l4.3 4.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-6-6c-.1-.1-.2-.2-.2-.3-.1-.2-.1-.5 0-.8.1-.1.1-.2.2-.3l6-6c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L3.4 6H17c.6 0 1 .4 1 1z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(3 5)">
      <mask id={'b' + id} fill="#fff">
        <use xlinkHref={'#a' + id} />
      </mask>
      <use fill="#000" fillRule="nonzero" xlinkHref={'#a' + id} />
      <g fill="#4A4A4A" mask={`url(#b${id})`}>
        <path d="M-3-5h24v24H-3z" />
      </g>
    </g>
  </svg>
));

export const BarChartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <path
        id="bar-a"
        d="M21 0h-4c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zm-1 18h-2V2h2v16zM13 5H9c-.6 0-1 .4-1 1v13c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1zm-1 13h-2V7h2v11zm-7-8H1c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1zm-1 8H2v-6h2v6z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(1 2)">
      <mask id="bar-b" fill="#fff">
        <use xlinkHref="#bar-a" />
      </mask>
      <g fill="#4A4A4A" mask="url(#bar-b)">
        <path d="M-1-2h24v24H-1z" />
      </g>
    </g>
  </svg>
);

export const CameraIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <path
        id="camera-a"
        d="M21 5h-3.5l-1.7-2.6c-.2-.2-.5-.4-.8-.4H9c-.3 0-.6.2-.8.4L6.5 5H3C1.3 5 0 6.3 0 8v11c0 1.7 1.3 3 3 3h18c1.7 0 3-1.3 3-3V8c0-1.7-1.3-3-3-3zm1 14c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1h4c.3 0 .6-.2.8-.4L9.5 4h4.9l1.7 2.6c.3.2.6.4.9.4h4c.6 0 1 .4 1 1v11zM12 8c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="camera-b" fill="#fff">
        <use xlinkHref="#camera-a" />
      </mask>
      <g fill="#4A4A4A" mask="url(#camera-b)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export const CheckIcon = uniqueIcon((id, props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
    <defs>
      <path
        id={'check-path' + id}
        d="M17.7 1.7l-11 11c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-5-5c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L6 10.6 16.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(3 6)">
      <mask id={'check-mask' + id} fill="#fff">
        <use xlinkHref={'#check-path' + id} />
      </mask>
      <g fill="#4A4A4A" mask={'url(#check-mask' + id + ')'}>
        <path d="M-3-6h24v24H-3z" />
      </g>
    </g>
  </svg>
));

export const ChevronRight = (props: any) => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <path
        id="a"
        d="M15.7 12.7l-6 6c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l5.3-5.3-5.3-5.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l6 6c.4.4.4 1 0 1.4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <g fill="#4A4A4A" mask="url(#b)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export const CloseIcon = ({ black, ...props }: any) => {
  const RealIcon = Icon(require(`img/close${black ? '-black' : ''}.svg`));
  return <RealIcon {...props} />;
};

export const CloudIcon = uniqueIcon(id => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <path
        id={'cloud-a' + id}
        d="M16.6 16.3c.396.4.396 1 0 1.4l-3.958 4c-.099.1-.198.2-.297.2-.099.1-.297.1-.396.1-.099 0-.297 0-.395-.1-.1-.1-.198-.1-.297-.2l-3.958-4a.974.974 0 0 1 0-1.4.95.95 0 0 1 1.385 0l2.276 2.3V12c0-.6.396-1 .99-1 .593 0 .989.4.989 1v6.6l2.276-2.3a.95.95 0 0 1 1.385 0zm6.135-5.8C21.647 9 19.865 8 17.887 8h-.495c-1.484-4.4-6.135-6.9-10.588-5.7-2.375.6-4.255 2-5.542 4.1C.075 8.5-.32 10.9.272 13.2c.397 1.4.99 2.7 1.98 3.7.396.4.99.5 1.385.1.396-.4.495-1 .1-1.4-.694-.8-1.287-1.8-1.485-2.9-.495-1.8-.198-3.7.791-5.3.99-1.6 2.474-2.8 4.256-3.2 3.66-1 7.52 1.3 8.41 5 .1.4.495.8.99.8h1.188c1.286 0 2.473.6 3.265 1.7.594.9.89 1.9.693 3-.198 1.1-.792 2-1.584 2.6-.494.3-.593.9-.197 1.4.197.3.494.4.791.4.198 0 .396-.1.594-.2 1.286-.9 2.177-2.3 2.474-3.9.297-1.6-.297-3.1-1.188-4.5z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id={'cloud-b' + id} fill="#fff">
        <use xlinkHref={'#cloud-a' + id} />
      </mask>
      <g fill="#4A4A4A" mask={`url(#cloud-b${id})`}>
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
));

export const CogIcon = uniqueIcon(id => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <path
        id={'cog-a' + id}
        d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm8.3 1.4c.1-.2.3-.4.7-.4 1.7 0 3-1.3 3-3s-1.3-3-3-3h-.2c-.2 0-.4-.1-.5-.3 0-.1 0-.1-.1-.2-.1-.2-.1-.5.2-.8 1.2-1.2 1.2-3.1 0-4.2-.6-.6-1.3-.9-2.1-.9s-1.6.3-2.2.9c-.2.2-.5.2-.7.1-.2 0-.4-.3-.4-.6 0-1.7-1.3-3-3-3S9 1.3 9 3v.2c0 .2-.1.4-.3.5-.1 0-.1 0-.2.1-.2.1-.5 0-.8-.2-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1.1 4.3.2.2.2.5.1.8-.1.2-.4.4-.7.4-1.7 0-3 1.3-3 3s1.3 3 3 3h.2c.3 0 .5.2.6.4.1.2.1.5-.2.8-.6.6-.9 1.3-.9 2.1s.3 1.5.9 2.1c1.2 1.2 3.1 1.2 4.3-.1.2-.2.5-.2.8-.1.3.1.4.3.4.7 0 1.7 1.3 3 3 3s3-1.3 3-3v-.2c0-.3.2-.5.4-.6.2-.1.5-.1.8.2 1.2 1.2 3.1 1.2 4.2 0 1.2-1.2 1.2-3.1-.1-4.3-.1-.2-.2-.5-.1-.7zm-1.8-.8c-.4 1-.2 2.1.6 3 .2.2.3.4.3.7 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3-.3 0-.5-.1-.8-.4-.8-.8-1.9-1-2.9-.5-1 .4-1.6 1.4-1.6 2.4v.2c0 .6-.4 1-1 1s-1-.4-1-1v-.1c0-1.1-.7-2-1.7-2.4-.3-.2-.7-.2-1.1-.2-.7 0-1.4.3-1.9.8-.4.4-1 .4-1.4 0-.2-.2-.3-.4-.3-.7 0-.3.1-.5.4-.8.8-.8 1-1.9.5-2.9-.4-1-1.4-1.6-2.4-1.6H3c-.6 0-1-.4-1-1s.4-1 1-1h.1c1.1 0 2-.7 2.4-1.7.4-1 .2-2.1-.6-3-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.5.1.7.7 1.8.9 2.7.6.1 0 .2 0 .3-.1 1-.4 1.6-1.4 1.6-2.4V3c0-.6.4-1 1-1s1 .4 1 1.1c0 1.1.6 2 1.6 2.4 1 .4 2.1.2 3-.6.2-.2.4-.3.7-.3.3 0 .5.1.7.3.4.4.4 1-.1 1.5-.7.7-.9 1.8-.6 2.7 0 .1 0 .2.1.3.4 1 1.4 1.6 2.4 1.6h.2c.6 0 1 .4 1 1s-.4 1-1.1 1c-1 0-2 .6-2.4 1.6z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id={'cog-b' + id} fill="#fff">
        <use xlinkHref={'#cog-a' + id} />
      </mask>
      <g fill="#4A4A4A" mask={`url(#cog-b${id})`}>
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
));

export const ContactIcon = Icon(require('img/contact.svg'));

export const CrossIcon = (props: any) => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <path
        id="cross-path"
        d="M13.7 12.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3L7 8.4l-5.3 5.3c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4L5.6 7 .3 1.7C-.1 1.3-.1.7.3.3c.4-.4 1-.4 1.4 0L7 5.6 12.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L8.4 7l5.3 5.3z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(5 5)">
      <mask id="cross-mask" fill="#fff">
        <use xlinkHref="#cross-path" />
      </mask>
      <g fill="#4A4A4A" mask="url(#cross-mask)">
        <path d="M-5-5h24v24H-5z" />
      </g>
    </g>
  </svg>
);

export const DashboardIcon = uniqueIcon(id => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <path
        id={'dash-a' + id}
        d="M11.111 9.142c1.917.5 3.333 2.261 3.333 4.358 0 2.485-1.99 4.5-4.444 4.5-2.455 0-4.444-2.015-4.444-4.5 0-2.097 1.416-3.859 3.333-4.358V5.625c0-.621.497-1.125 1.111-1.125s1.111.504 1.111 1.125v3.517zM10 0c5.523 0 10 4.533 10 10.125 0 .621-.497 1.125-1.111 1.125a1.118 1.118 0 0 1-1.111-1.125c0-4.35-3.482-7.875-7.778-7.875-4.296 0-7.778 3.526-7.778 7.875 0 .621-.497 1.125-1.11 1.125A1.118 1.118 0 0 1 0 10.125C0 4.533 4.477 0 10 0zm0 11.25c-1.227 0-2.222 1.007-2.222 2.25s.995 2.25 2.222 2.25c1.227 0 2.222-1.007 2.222-2.25s-.995-2.25-2.222-2.25z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(2 3)">
      <mask id={'dash-b' + id} fill="#fff">
        <use xlinkHref={'#dash-a' + id} />
      </mask>
      <g fill="#4A4A4A" mask={`url(#dash-b${id})`}>
        <path d="M-2-3h24v24H-2z" />
      </g>
    </g>
  </svg>
));

export const DiscourseIcon = Icon(require('img/discourse.svg'));

export const DownIcon = () => (
  <svg width="13px" height="9px" viewBox="0 0 13 9" version="1.1">
    <g
      id="Symbols"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd">
      <g id="icon-/-down-arrow-black" fill="#000000">
        <polygon
          id="down-arrow-black"
          points="11.7578125 0.75 12.5 1.5703125 6.25 8.25 0 1.5703125 0.7421875 0.75 6.25 6.609375"
        />
      </g>
    </g>
  </svg>
);

export const DownloadIcon = (props: any) => (
  <svg width="15px" height="16px" viewBox="0 0 15 16">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g fill="#000000">
        <path d="M0.99609375,4.11035156 C1.66992524,2.95800205 2.58300205,2.04736663 3.73535156,1.37841797 C4.88770107,0.709469312 6.14257134,0.375 7.5,0.375 C8.85742866,0.375 10.1122989,0.709469312 11.2646484,1.37841797 C12.4169979,2.04736663 13.3276334,2.95800205 13.996582,4.11035156 C14.6655307,5.26270107 15,6.51757134 15,7.875 C15,9.23242866 14.6655307,10.4872989 13.996582,11.6396484 C13.3276334,12.7919979 12.4169979,13.7026334 11.2646484,14.371582 C10.1122989,15.0405307 8.85742866,15.375 7.5,15.375 C6.14257134,15.375 4.88770107,15.0405307 3.73535156,14.371582 C2.58300205,13.7026334 1.67236663,12.7919979 1.00341797,11.6396484 C0.334469312,10.4872989 0,9.23242866 0,7.875 C0,6.51757134 0.33202793,5.26270107 0.99609375,4.11035156 Z M13.5498047,5.32617188 C13.2080061,4.51562095 12.7417022,3.81738574 12.1508789,3.23144531 C11.5600556,2.64550488 10.8593791,2.17920095 10.0488281,1.83251953 C9.2382772,1.48583811 8.38867632,1.3125 7.5,1.3125 C6.61132368,1.3125 5.7617228,1.48583811 4.95117188,1.83251953 C4.14062095,2.17920095 3.44238574,2.64550488 2.85644531,3.23144531 C2.27050488,3.81738574 1.80420095,4.51562095 1.45751953,5.32617188 C1.11083811,6.1367228 0.9375,6.98632368 0.9375,7.875 C0.9375,8.76367632 1.11083811,9.6132772 1.45751953,10.4238281 C1.80420095,11.2343791 2.27050488,11.9326143 2.85644531,12.5185547 C3.44238574,13.1044951 4.14062095,13.570799 4.95117188,13.9174805 C5.7617228,14.2641619 6.61132368,14.4375 7.5,14.4375 C8.38867632,14.4375 9.2382772,14.2641619 10.0488281,13.9174805 C10.8593791,13.570799 11.5600556,13.1044951 12.1508789,12.5185547 C12.7417022,11.9326143 13.2104475,11.2343791 13.5571289,10.4238281 C13.9038103,9.6132772 14.0771484,8.76367632 14.0771484,7.875 C14.0771484,6.98632368 13.9013689,6.1367228 13.5498047,5.32617188 Z M7.03125,4.59375 C7.03125,4.52539028 7.04345691,4.46191436 7.06787109,4.40332031 C7.09228528,4.34472627 7.12402324,4.29589863 7.16308594,4.25683594 C7.20214863,4.21777324 7.25097627,4.18603528 7.30957031,4.16162109 C7.36816436,4.13720691 7.43164028,4.125 7.5,4.125 C7.62695376,4.125 7.73681594,4.16894487 7.82958984,4.25683594 C7.92236375,4.344727 7.96875,4.45703057 7.96875,4.59375 L7.96875,9.89648438 L9.68261719,8.16796875 C9.78027393,8.08007769 9.89257749,8.03613281 10.0195312,8.03613281 C10.146485,8.03613281 10.2563472,8.08251907 10.3491211,8.17529297 C10.441895,8.26806687 10.4882812,8.37792905 10.4882812,8.50488281 C10.4882812,8.63183657 10.4443364,8.74414014 10.3564453,8.84179688 L7.51464844,11.6103516 L4.67285156,8.84179688 C4.64355454,8.81249985 4.61914072,8.77832051 4.59960937,8.73925781 C4.47265562,8.53417866 4.49706943,8.34375088 4.67285156,8.16796875 C4.70214858,8.13867173 4.73388655,8.11425791 4.76806641,8.09472656 C4.80224626,8.07519521 4.83886699,8.06054692 4.87792969,8.05078125 C4.91699238,8.04101558 4.95605449,8.03613281 4.99511719,8.03613281 C5.03417988,8.03613281 5.07324199,8.04101558 5.11230469,8.05078125 C5.15136738,8.06054692 5.19042949,8.07519521 5.22949219,8.09472656 C5.26855488,8.11425791 5.30273423,8.13867173 5.33203125,8.16796875 L7.03125,9.8671875 L7.03125,4.59375 Z" />
      </g>
    </g>
  </svg>
);

export const GithubIcon = Icon(require('img/github.svg'));

export const GlobeIcon = uniqueIcon(id => (
  <svg width="16" height="16" viewBox="0 0 16 16">
    <defs>
      <path
        id={'a' + id}
        d="M8 .667a7.333 7.333 0 1 0 0 14.666A7.333 7.333 0 0 0 8 .667zM7.55 14.11a6.437 6.437 0 0 1-3.775-1.808A6.233 6.233 0 0 1 1.89 7.828c0-1.522.543-2.961 1.539-4.106.025.303.089.627.073.858-.06.845-.145 1.374.359 2.086.196.278.244.676.34.997.092.314.465.48.722.673.52.39 1.015.845 1.565 1.189.363.227.59.34.484.775-.086.35-.11.566-.294.878-.056.095.212.707.302.795.27.266.54.51.835.75.457.371-.045.854-.263 1.388zm4.948-1.706a6.092 6.092 0 0 1-3.194 1.706 2.57 2.57 0 0 1 .756-1.02c.245-.191.551-.557.68-.847.127-.29.296-.541.468-.807.243-.38-.601-.95-.875-1.07-.616-.27-1.08-.634-1.627-1.022-.39-.276-1.182.145-1.622-.05-.603-.264-1.1-.726-1.625-1.123-.54-.41-.514-.89-.514-1.495.423.016 1.026-.118 1.307.225.09.108.394.592.599.42.167-.14-.124-.704-.18-.836-.173-.407.393-.566.683-.842.378-.36 1.19-.926 1.125-1.184-.064-.258-.811-.99-1.25-.876-.066.017-.645.63-.757.725l.009-.599c.002-.126-.234-.255-.223-.337.028-.205.596-.579.737-.742-.099-.063-.437-.355-.539-.312-.248.104-.527.175-.775.28a1.6 1.6 0 0 0-.022-.249 6.057 6.057 0 0 1 1.563-.457l.486.197.343.41.342.356.3.097.475-.452-.123-.322v-.29c.94.137 1.828.49 2.606 1.036-.14.012-.292.033-.465.055-.07-.042-.162-.061-.24-.091.225.488.46.97.7 1.451.254.515.82 1.067.92 1.61.116.64.035 1.222.1 1.975.061.726.81 1.55.81 1.55s.347.119.635.077a6.172 6.172 0 0 1-1.613 2.853z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id={'b' + id} fill="#fff">
        <use xlinkHref={'#a' + id} />
      </mask>
      <use fill="#000" fillRule="nonzero" xlinkHref={'#a' + id} />
      <g fill="#959595" mask={`url(#b${id})`}>
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
));

export const InfoIcon = uniqueIcon(id => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <path
        id={'info-a' + id}
        d="M11 0C4.9 0 0 4.9 0 11s4.9 11 11 11 11-4.9 11-11S17.1 0 11 0zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm1-9v4c0 .6-.4 1-1 1s-1-.4-1-1v-4c0-.6.4-1 1-1s1 .4 1 1zm-.3-4.7c.2.2.3.4.3.7 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3h-.2c-.1 0-.1 0-.2-.1-.1 0-.1-.1-.2-.1s-.1-.1-.1-.1c-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7l.1-.1c.1 0 .1-.1.2-.1s.1 0 .2-.1c.3 0 .7.1.9.3z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(1 1)">
      <mask id={'info-b' + id} fill="#fff">
        <use xlinkHref={'#info-a' + id} />
      </mask>
      <g fill="#4A4A4A" mask={'url(#info-b' + id + ')'}>
        <path d="M-1-1h24v24H-1z" />
      </g>
    </g>
  </svg>
));

export const KeyboardIcon = Icon(require('img/keyboard.svg'));

export const LinkIcon = uniqueIcon((id, props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
    <defs>
      <path
        id={'a' + id}
        d="M10 11c0 .6-.4 1-1 1H6c-3.3 0-6-2.7-6-6s2.7-6 6-6h3c.6 0 1 .4 1 1s-.4 1-1 1H6C3.8 2 2 3.8 2 6s1.8 4 4 4h3c.6 0 1 .4 1 1zm8-11h-3c-.6 0-1 .4-1 1s.4 1 1 1h3c2.2 0 4 1.8 4 4s-1.8 4-4 4h-3c-.6 0-1 .4-1 1s.4 1 1 1h3c3.3 0 6-2.7 6-6s-2.7-6-6-6zM7 6c0 .6.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1H8c-.6 0-1 .4-1 1z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(0 6)">
      <mask id={'b' + id} fill="#fff">
        <use xlinkHref={'#a' + id} />
      </mask>
      <g fill="#4A4A4A" mask={'url(#b' + id + ')'}>
        <path d="M0-6h24v24H0z" />
      </g>
    </g>
  </svg>
));

export const LogoutIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <path
        id="a"
        d="M9.011 21c0 .6-.4 1-1.001 1H3.004C1.302 22 0 20.7 0 19V3c0-1.7 1.302-3 3.004-3H8.01c.6 0 1.001.4 1.001 1s-.4 1-1.001 1H3.004c-.601 0-1.001.4-1.001 1v16c0 .6.4 1 1 1H8.01c.6 0 1.001.4 1.001 1zm10.914-9.6c.1-.2.1-.5 0-.8-.1-.1-.1-.2-.2-.3l-4.005-4a.969.969 0 0 0-1.402 0c-.4.4-.4 1 0 1.4L16.62 10H7.009c-.601 0-1.001.4-1.001 1s.4 1 1 1h9.613l-2.303 2.3c-.4.4-.4 1 0 1.4.2.2.5.3.7.3.201 0 .501-.1.702-.3l4.005-4c.1-.1.2-.2.2-.3z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(2 1)">
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <use fill="#000" fillRule="nonzero" xlinkHref="#a" />
      <g fill="#4A4A4A" mask="url(#b)">
        <path d="M-2-1h24v24H-2z" />
      </g>
    </g>
  </svg>
);

export const MenuIcon = ({ className = '', ...props }: any) => (
  <svg className={'menu-icon ' + className} width="10" height="10" {...props}>
    <rect className="left" x="4" y="0" width="2" height="2" />
    <rect className="right" x="4" y="0" width="2" height="2" />
    <rect x="4" y="4" width="2" height="2" />
    <rect className="left" x="4" y="8" width="2" height="2" />
    <rect className="right" x="4" y="8" width="2" height="2" />
  </svg>
);

export const MicIcon = uniqueIcon(id => (
  <svg width="29" height="28" viewBox="0 0 29 28">
    <defs>
      <path
        id={'mic-path' + id}
        d="M9.333 18.667A4.68 4.68 0 0 0 14 14V4.667A4.68 4.68 0 0 0 9.333 0a4.68 4.68 0 0 0-4.666 4.667V14a4.68 4.68 0 0 0 4.666 4.667zM7 4.667a2.34 2.34 0 0 1 2.333-2.334 2.34 2.34 0 0 1 2.334 2.334V14a2.34 2.34 0 0 1-2.334 2.333A2.34 2.34 0 0 1 7 14V4.667zm11.667 7V14c0 4.783-3.617 8.633-8.167 9.217v2.45H14c.7 0 1.167.466 1.167 1.166S14.7 28 14 28H4.667c-.7 0-1.167-.467-1.167-1.167s.467-1.166 1.167-1.166h3.5v-2.45C3.617 22.633 0 18.667 0 14v-2.333c0-.7.467-1.167 1.167-1.167s1.166.467 1.166 1.167V14c0 3.85 3.15 7 7 7s7-3.15 7-7v-2.333c0-.7.467-1.167 1.167-1.167s1.167.467 1.167 1.167z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(5)">
      <mask id={'mic-mask' + id} fill="#fff">
        <use xlinkHref={'#mic-path' + id} />
      </mask>
      <g fill="#FF4F5E" mask={`url(#mic-mask${id})`}>
        <path d="M-5 0h28v28H-5z" />
      </g>
    </g>
  </svg>
));

export const OldPlayIcon = (props: any) => (
  <svg viewBox="0 0 13 15" {...props}>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="icon-/-play" fill="#B7D43F">
        <path
          d="M0.978009259,0 C1.03819475,0 1.09587164,0.00733847847 1.15104167,0.0220156556 C1.2062117,0.0366928327 1.2613809,0.0538159491 1.31655093,0.0733855186 C1.37172095,0.0929550881 1.42438247,0.117416683 1.47453704,0.146771037 L12.5486111,6.7074364 C12.6388893,6.75636032 12.7191355,6.82240663 12.7893519,6.9055773 C12.8595683,6.98874797 12.9122298,7.08170203 12.947338,7.18444227 C12.9824462,7.28718251 13,7.39236737 13,7.5 C13,7.85225225 12.8495385,8.11643748 12.5486111,8.2925636 L1.45949074,14.853229 C1.38927434,14.9021529 1.31153592,14.9388453 1.22627315,14.9633072 C1.14101038,14.9877692 1.05324119,15 0.962962963,15 C0.882715648,15 0.802469537,14.9902154 0.722222222,14.9706458 C0.641974907,14.9510762 0.566744178,14.9217223 0.496527778,14.8825832 C0.165507604,14.6966723 0,14.4227024 0,14.0606654 L0.0150462963,0.939334638 C0.0150462963,0.577297603 0.1805539,0.30332774 0.511574074,0.11741683 C0.652006875,0.0391385519 0.807483715,0 0.978009259,0 Z"
          id="play-button"
        />
      </g>
    </g>
  </svg>
);

export const OldRedoIcon = (props: any) => (
  <svg>
    <g strokeWidth="1" fill="none" fillRule="evenodd">
      <g fill="#000000">
        <path d="M28.5714626,3.19044781 C28.5714626,2.70681628 28.2738432,2.27898839 27.8460153,2.09297626 C27.3995862,1.90696413 26.8787523,1.9999702 26.5439305,2.35339324 L24.1257728,4.75294967 C21.5030018,2.27898839 17.9501702,0.809492588 14.2857313,0.809492588 C6.41741836,0.809492588 0,7.22691095 0,15.0952239 C0,22.9635369 6.41741836,29.3809552 14.2857313,29.3809552 C18.545409,29.3809552 22.5632709,27.5022327 25.279048,24.2284193 C25.4650601,23.9866036 25.4650601,23.6331805 25.2418456,23.4285672 L22.6934794,20.8615998 C22.5632709,20.7499925 22.39586,20.6941889 22.2284491,20.6941889 C22.0610382,20.7127901 21.8936273,20.787195 21.8006212,20.9174035 C19.9777024,23.2797575 17.2433241,24.6190448 14.2857313,24.6190448 C9.04018935,24.6190448 4.76191044,20.3407659 4.76191044,15.0952239 C4.76191044,9.84968194 9.04018935,5.57140303 14.2857313,5.57140303 C16.7224902,5.57140303 19.0290405,6.50146366 20.7775545,8.11976916 L18.2105872,10.6867365 C17.8571641,11.0215583 17.7641581,11.5423923 17.9501702,11.9702202 C18.1361823,12.4166493 18.5640102,12.7142687 19.0476418,12.7142687 L27.380985,12.7142687 C28.0320275,12.7142687 28.5714626,12.1748335 28.5714626,11.5237911 L28.5714626,3.19044781 Z" />
      </g>
    </g>
  </svg>
);

export const PenIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <path
        id="pen-a"
        d="M19.7 5.3l-5-5c-.4-.4-1-.4-1.4 0l-13 13c-.2.2-.3.4-.3.7v5c0 .6.4 1 1 1h5c.3 0 .5-.1.7-.3l13-13c.4-.4.4-1 0-1.4zM5.6 18H2v-3.6l12-12L17.6 6l-12 12z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(2 2)">
      <mask id="pen-b" fill="#fff">
        <use xlinkHref="#pen-a" />
      </mask>
      <g fill="#4A4A4A" mask="url(#pen-b)">
        <path d="M-2-2h24v24H-2z" />
      </g>
    </g>
  </svg>
);

export const PlayOutlineIcon = uniqueIcon(id => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <path
        id={'play-outline-path' + id}
        d="M15.5 9.173L1.5.15c-.3-.2-.7-.2-1 0-.3.1-.5.401-.5.802v18.045c0 .401.2.702.5.903.2.1.3.1.5.1s.4-.1.5-.2l14-9.023c.3-.2.5-.501.5-.802 0-.3-.2-.702-.5-.802zM2 17.193V2.757l11.2 7.218L2 17.193z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(4 2)">
      <mask id={'play-outline-mask' + id} fill="#fff">
        <use xlinkHref={'#play-outline-path' + id} />
      </mask>
      <g fill="#4A4A4A" mask={`url(#play-outline-mask${id})`}>
        <path d="M-4-1h24v24H-4z" />
      </g>
    </g>
  </svg>
));

export const PlayIcon = Icon(require('img/play.svg'), 'play');

export const RedoIcon = uniqueIcon(id => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <path
        id={'redo-path' + id}
        d="M15.171 19.399c-1.105.4-2.21.601-3.315.601-4.12 0-8.038-2.604-9.445-6.711-.2-.501.1-1.102.603-1.302.502-.2 1.105.1 1.306.6 1.507 4.208 6.029 6.411 10.248 4.909 4.22-1.503 6.43-6.01 4.923-10.217-.703-2.003-2.21-3.606-4.119-4.608-1.909-.901-4.12-1.001-6.129-.3-1.105.4-2.21 1.001-3.014 1.903L3.316 6.978h3.516c.603 0 1.005.401 1.005 1.002s-.402 1.002-1.005 1.002H.603h-.1l-.101-.1c-.1 0-.1-.1-.201-.1 0 0 0-.1-.1-.1C.1 8.58 0 8.58 0 8.48v-.2-6.31C0 1.368.402.967 1.005.967c.603 0 1.004.401 1.004 1.002v3.706l3.015-2.804C6.028 1.87 7.334 1.069 8.74.568c2.512-.902 5.224-.701 7.636.4 2.411 1.202 4.22 3.206 5.124 5.71 1.708 5.209-1.105 10.918-6.33 12.721z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(1 2)">
      <mask id={'redo-mask' + id} fill="#fff">
        <use xlinkHref={'#redo-path' + id} />
      </mask>
      <g fill="#4A4A4A" mask={`url(#redo-mask${id})`}>
        <path d="M-1-2h24v24H-1z" />
      </g>
    </g>
  </svg>
));

export const SearchIcon = Icon(require('img/search.svg'), 'search');

export const SettingsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <path
        id="settings-a"
        d="M3 8V1c0-.6.4-1 1-1s1 .4 1 1v7c0 .6-.4 1-1 1s-1-.4-1-1zm9 1c-.6 0-1 .4-1 1v9c0 .6.4 1 1 1s1-.4 1-1v-9c0-.6-.4-1-1-1zm8 2c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1s-1 .4-1 1v9c0 .6.4 1 1 1zM7 11H1c-.6 0-1 .4-1 1s.4 1 1 1h2v6c0 .6.4 1 1 1s1-.4 1-1v-6h2c.6 0 1-.4 1-1s-.4-1-1-1zm8-6h-2V1c0-.6-.4-1-1-1s-1 .4-1 1v4H9c-.6 0-1 .4-1 1s.4 1 1 1h6c.6 0 1-.4 1-1s-.4-1-1-1zm8 8h-6c-.6 0-1 .4-1 1s.4 1 1 1h2v4c0 .6.4 1 1 1s1-.4 1-1v-4h2c.6 0 1-.4 1-1s-.4-1-1-1z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(0 2)">
      <mask id="settings-b" fill="#fff">
        <use xlinkHref="#settings-a" />
      </mask>
      <use fill="#000" fillRule="nonzero" xlinkHref="#settings-a" />
      <g fill="#4A4A4A" mask="url(#settings-b)">
        <path d="M0-2h24v24H0z" />
      </g>
    </g>
  </svg>
);

export const ShareIcon = uniqueIcon(id => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <path
        id={'share-path' + id}
        d="M18 10.987v8.01C18 20.699 16.7 22 15 22H3c-1.7 0-3-1.301-3-3.003v-8.01c0-.6.4-1 1-1s1 .4 1 1v8.01c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-8.01c0-.6.4-1 1-1s1 .4 1 1zM5.7 5.681L8 3.38V13.99c0 .6.4 1.001 1 1.001s1-.4 1-1.001V3.379l2.3 2.302c.2.2.4.3.7.3.3 0 .5-.1.7-.3.4-.4.4-1 0-1.401L9.7.275c-.1-.1-.2-.2-.3-.2-.2-.1-.5-.1-.8 0-.1.1-.2.1-.3.2l-4 4.005c-.4.4-.4 1.001 0 1.401.4.4 1 .4 1.4 0z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(3 1)">
      <mask id={'share-mask' + id} fill="#fff">
        <use xlinkHref={'#share-path' + id} />
      </mask>
      <g fill="#4A4A4A" mask={`url(#share-mask${id})`}>
        <path d="M-3-1h24v24H-3z" />
      </g>
    </g>
  </svg>
));

export const SkipIcon = uniqueIcon(id => (
  <svg width="22" height="22" viewBox="0 0 22 22">
    <defs>
      <path
        id={'skip-path' + id}
        d="M12.558 6.142l-4.583 4.583a.832.832 0 0 1-.642.275.832.832 0 0 1-.641-.275.886.886 0 0 1 0-1.283L10.633 5.5 6.692 1.558a.886.886 0 0 1 0-1.283.886.886 0 0 1 1.283 0l4.583 4.583a.886.886 0 0 1 0 1.284zM6.142 4.858L1.558.275a.886.886 0 0 0-1.283 0 .886.886 0 0 0 0 1.283L4.217 5.5.275 9.442a.886.886 0 0 0 0 1.283.832.832 0 0 0 .642.275.832.832 0 0 0 .641-.275l4.584-4.583a.886.886 0 0 0 0-1.284z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(4.583 5.5)">
      <mask id={'skip-mask' + id} fill="#fff">
        <use xlinkHref={'#skip-path' + id} />
      </mask>
      <use fill="#000" fillRule="nonzero" xlinkHref={'#skip-path' + id} />
      <g fill="#000" mask={`url(#skip-mask${id})`}>
        <path d="M-4.583-5.5h22v22h-22z" />
      </g>
    </g>
  </svg>
));

export const StopIcon = uniqueIcon(id => (
  <svg width="28" height="28" viewBox="0 0 28 28">
    <defs>
      <path
        id={'stop-path' + id}
        d="M19.833 0H3.5C1.517 0 0 1.517 0 3.5v16.333c0 1.984 1.517 3.5 3.5 3.5h16.333c1.984 0 3.5-1.516 3.5-3.5V3.5c0-1.983-1.516-3.5-3.5-3.5zM21 19.833c0 .7-.467 1.167-1.167 1.167H3.5c-.7 0-1.167-.467-1.167-1.167V3.5c0-.7.467-1.167 1.167-1.167h16.333c.7 0 1.167.467 1.167 1.167v16.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(2.333 2.333)">
      <mask id={'stop-mask' + id} fill="#fff">
        <use xlinkHref={'#stop-path' + id} />
      </mask>
      <g fill="#FF4F5E" mask={`url(#stop-mask${id})`}>
        <path d="M-2.333-2.333h28v28h-28z" />
      </g>
    </g>
  </svg>
));

export const SuccessIcon = Icon(require('img/success.svg'), 'success');

export const SupportIcon = Icon(require('img/support.svg'), 'support');

export const ThumbsDownIcon = (props: any) => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <path
        id="thumbs-down-path"
        d="M22 2.913C21.797 1.205 20.38 0 18.658 0H4.48C2.96 0 1.745 1.105 1.442 2.511L.024 11.553c-.203 1.607.911 3.214 2.532 3.415h5.266v3.014c0 2.21 1.823 4.018 4.05 4.018.406 0 .81-.2.912-.603l3.747-8.438h2.026c1.721 0 3.14-1.206 3.342-2.913V3.014c.101 0 .101-.1.101-.1zm-7.09 8.94l-3.645 8.138c-.81-.302-1.418-1.005-1.418-1.909v-4.018c0-.603-.405-1.005-1.012-1.005H3.062h-.203c-.506-.1-.911-.602-.81-1.105l1.418-9.04c.101-.503.506-.905 1.013-.905h10.43v9.845zm5.065-1.908c-.102.603-.71 1.105-1.317 1.105h-1.722V2.01h1.722c.608 0 1.215.501 1.317 1.104v6.831z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(1 1)">
      <mask id="thumbs-down-mask" fill="#fff">
        <use xlinkHref="#thumbs-down-path" />
      </mask>
      <g fill="#4A4A4A" mask="url(#thumbs-down-mask)">
        <path d="M-1-1h24v24H-1z" />
      </g>
    </g>
  </svg>
);

export const ThumbsUpIcon = (props: any) => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <path
        id="thumbs-up-path"
        d="M21.367 8.2c-.506-.6-1.215-1.1-2.025-1.2h-5.165V4c0-2.2-1.823-4-4.05-4-.405 0-.81.2-.912.6L5.468 9h-2.43C1.316 9 0 10.3 0 12v7c0 1.7 1.316 3 3.038 3h14.481c1.519 0 2.734-1.1 3.038-2.5l1.418-9c.1-.8-.102-1.6-.608-2.3zM5.063 20H3.038c-.608 0-1.013-.4-1.013-1v-7c0-.6.405-1 1.013-1h2.025v9zm13.469-.8c-.102.5-.507.8-1.013.8H7.089v-9.8l3.645-8.1c.81.3 1.418 1 1.418 1.9v4c0 .6.405 1 1.013 1h5.974c.304 0 .507.2.71.4.202.2.202.5.202.7l-1.52 9.1z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(1 1)">
      <mask id="thumbs-up" fill="#fff">
        <use xlinkHref="#thumbs-up-path" />
      </mask>
      <g fill="#4A4A4A" mask="url(#thumbs-up)">
        <path d="M-1-1h24v24H-1z" />
      </g>
    </g>
  </svg>
);

export const TrashIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <path
        id="trash-a"
        d="M21 5h-4V4c0-1.7-1.3-3-3-3h-4C8.3 1 7 2.3 7 4v1H3c-.6 0-1 .4-1 1s.4 1 1 1h1v13c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V7h1c.6 0 1-.4 1-1s-.4-1-1-1zM9 4c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v1H9V4zm9 16c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V7h12v13zm-7-9v6c0 .6-.4 1-1 1s-1-.4-1-1v-6c0-.6.4-1 1-1s1 .4 1 1zm4 0v6c0 .6-.4 1-1 1s-1-.4-1-1v-6c0-.6.4-1 1-1s1 .4 1 1z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="trash-b" fill="#fff">
        <use xlinkHref="#trash-a" />
      </mask>
      <g fill="#4A4A4A" mask="url(#trash-b)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export const VolumeIcon = (props: any) => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <path
        id="volume-path"
        d="M10.388.108c-.3-.198-.799-.099-1.099.1L4.595 3.982H.999c-.6 0-.999.397-.999.993v5.96c0 .595.4.993.999.993h3.596l4.694 3.774c.2.1.4.199.6.199.1 0 .3 0 .4-.1.299-.198.599-.496.599-.894V1.002c.1-.397-.1-.695-.5-.894zM8.99 12.822L5.594 10.14c-.2-.1-.4-.199-.6-.199H1.998V5.968h2.996c.2 0 .4-.099.6-.198L8.99 3.088v9.734zm6.193-9.039c2.297 2.285 2.297 6.059 0 8.443-.2.198-.5.298-.7.298-.2 0-.499-.1-.699-.298a.956.956 0 0 1 0-1.39c1.599-1.59 1.599-4.073 0-5.662a.956.956 0 0 1 0-1.39c.4-.398 1.1-.398 1.399 0zm3.596 11.919c-.2.199-.5.298-.7.298-.2 0-.499-.1-.699-.298a.956.956 0 0 1 0-1.39c3.496-3.477 3.496-9.138 0-12.615a.956.956 0 0 1 0-1.39.97.97 0 0 1 1.399 0c4.295 4.172 4.295 11.124 0 15.395z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(0 4)">
      <mask id="volume-mask" fill="#fff">
        <use xlinkHref="#volume-path" />
      </mask>
      <g fill="#4A4A4A" mask="url(#volume-mask)">
        <path d="M-1-4h24v24H-1z" />
      </g>
    </g>
  </svg>
);

export const UserIcon = uniqueIcon(id => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <path
        id={'user-a' + id}
        d="M18 17v2c0 .6-.4 1-1 1s-1-.4-1-1v-2c0-1.7-1.3-3-3-3H5c-1.7 0-3 1.3-3 3v2c0 .6-.4 1-1 1s-1-.4-1-1v-2c0-2.8 2.2-5 5-5h8c2.8 0 5 2.2 5 5zM4 5c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5zm2 0c0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3-3 1.3-3 3z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(3 2)">
      <mask id={'user-b' + id} fill="#fff">
        <use xlinkHref={'#user-a' + id} />
      </mask>
      <g fill="#4A4A4A" mask={'url(#user-b' + id + ')'}>
        <path d="M-3-2h24v24H-3z" />
      </g>
    </g>
  </svg>
));

export const UserPlusIcon = uniqueIcon(id => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <path
        id={'user-p-a' + id}
        d="M17 19v2c0 .6-.4 1-1 1s-1-.4-1-1v-2c0-1.7-1.3-3-3-3H5c-1.7 0-3 1.3-3 3v2c0 .6-.4 1-1 1s-1-.4-1-1v-2c0-2.8 2.2-5 5-5h7c2.8 0 5 2.2 5 5zM3.5 7c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5zm2 0c0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3-3 1.3-3 3zM23 10h-2V8c0-.6-.4-1-1-1s-1 .4-1 1v2h-2c-.6 0-1 .4-1 1s.4 1 1 1h2v2c0 .6.4 1 1 1s1-.4 1-1v-2h2c.6 0 1-.4 1-1s-.4-1-1-1z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id={'user-p-b' + id} fill="#fff">
        <use xlinkHref={'#user-p-a' + id} />
      </mask>
      <g fill="#4A4A4A" mask={'url(#user-p-b' + id + ')'}>
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
));

export const CautionIcon = Icon(require('img/exclamation.svg'), 'exclamation');

const FONT_ICONS = {
  chrome: '',
  facebook: '',
  firefox: '',
  link: '',
  pause: '',
  stop: '',
  twitter: '',
  undo: '',
};

interface FontIconProps {
  [key: string]: any;
  type: keyof typeof FONT_ICONS;
}

export const FontIcon = ({ type, ...props }: FontIconProps) => (
  <span aria-hidden="true" data-icon={FONT_ICONS[type]} {...props} />
);
