(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[299],{7602:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cs247b",function(){return n(463)}])},463:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var s=n(5893),a=n(7294),i=n(9166),r=n(2175),l=n(4053),c=n(5678),o=n(5675),d=n.n(o);function m(){let e=(0,l.useSession)();return(0,s.jsx)(s.Fragment,{children:e?(0,s.jsx)(g,{session:e}):(0,s.jsx)(u,{})})}function u(){async function e(e){let{data:t,error:n}=await i.O.auth.signInWithOtp({email:e.email,options:{emailRedirectTo:"https://tristansinclair.github.io/cs247b"}});n?(c.Am.error("Issue sending magic link, try again. "+n),console.log(n)):c.Am.success("You should receive an email to login shortly!")}return(0,s.jsxs)("div",{className:"mx-auto max-w-xl py-16 px-6 text-center lg:px-8",children:[(0,s.jsx)("h1",{className:"mt-12 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100",children:"CS 247b Study"}),(0,s.jsx)("h3",{className:"mt-2 text-xl text-zinc-700 dark:text-zinc-300",children:"Welcome to our study! Enter your email and you'll receive a single sign on link!"}),(0,s.jsx)(r.J9,{initialValues:{email:""},onSubmit:async t=>{e(t)},children:(0,s.jsx)(r.l0,{children:(0,s.jsxs)("div",{className:"mt-6 sm:flex",children:[(0,s.jsx)("div",{className:"min-w-0 flex-1",children:(0,s.jsx)(r.gN,{required:!0,id:"email",name:"email",type:"email",placeholder:"Enter your email",className:"block w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-4 py-3 shadow-md shadow-zinc-800/5 transition placeholder:text-zinc-400 focus:border-tldr-green-500 focus:outline-none focus:ring-4 focus:ring-tldr-green-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-tldr-green-400 dark:focus:ring-tldr-green-400/10 sm:text-sm"})}),(0,s.jsx)("div",{className:"mt-3 sm:mt-0 sm:ml-3",children:(0,s.jsx)("button",{type:"submit",className:"block w-full rounded-md bg-tldr-green-500 py-3 px-4 font-medium text-white shadow hover:bg-tldr-green-600 focus:outline-none focus:ring-2 focus:ring-tldr-green-300 focus:ring-offset-2 focus:ring-offset-zinc-900",children:"Sign in"})})]})})})]})}function x(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+"-"+n+"-"+t}function g(e){let{session:t}=e,[n,r]=(0,a.useState)(!0),[l,o]=(0,a.useState)(""),[m,u]=(0,a.useState)(""),[g,f]=(0,a.useState)(""),[p,j]=(0,a.useState)(""),[y,b]=(0,a.useState)([]),[w,N]=(0,a.useState)(!1),[k,v]=(0,a.useState)(null);async function z(){try{r(!0);let{data:e,error:t}=await i.O.from("cs247b_research2").select().eq("date",x()).single();e&&(o(e.image),u(e.name),j(e.description),f(e.location))}catch(n){c.Am.error("Issue fetching today's location. Try refreshing!"),console.log(n)}finally{r(!1)}}async function S(){let{data:e,error:n}=await i.O.storage.from("cs247b").upload(x()+"/"+t.user.email+k.name.slice(k.name.lastIndexOf(".")),k);e?(_(),N(!0)):(console.log(n),c.Am.error(n.message))}async function _(){try{r(!0);let{data:e,error:t}=await i.O.storage.from("cs247b").list(x(),{limit:20,offset:0,sortBy:{column:"created_at",order:"desc"}}),n=[".jpg",".jpeg",".png"],s=e.filter(e=>n.some(t=>e.name.endsWith(t)));b(s)}catch(a){c.Am.error("Issue fetching today's location. Try refreshing!"),console.log(a)}finally{r(!1)}}return(0,a.useEffect)(()=>{z(),_()},[t]),(0,s.jsxs)("div",{className:"mx-auto max-w-7xl py-16 px-6 lg:px-8",children:[(0,s.jsx)("h1",{className:"text-center text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100",children:"Welcome to the CS 247b Study "+t.user.email+"!"}),(0,s.jsx)("div",{className:"mb-12 mt-2 text-zinc-700 dark:text-zinc-500",children:(0,s.jsx)("p",{className:"text-base",children:"Join us on a daily adventure on Stanford's campus! As a participant in our study, we encourage you to take a break from your daily routine and spend some time at a new location each day. Relax, have fun, and snap a photo to share with other participants and let us know you checked in. Let's discover the beauty of the campus together!"})}),(0,s.jsxs)("div",{className:"grid gap-8 align-middle md:grid-cols-2 md:gap-16 ",children:[(0,s.jsx)("div",{className:"relative min-h-[20rem] w-auto max-w-none overflow-hidden rounded-xl shadow-xl ring-1 ring-black/5",children:!n&&(0,s.jsx)(d(),{className:"object-cover",src:l,alt:"Today's Image",fill:!0})}),(0,s.jsxs)("div",{className:"place-self-center",children:[(0,s.jsxs)("h2",{className:"text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl",children:["Today's Location:"," ",(0,s.jsx)("a",{className:"text-pa-green underline dark:text-pa-green-300",href:g,children:m})]}),(0,s.jsx)("div",{className:"mt-6 space-y-6 text-zinc-700 dark:text-zinc-500",children:(0,s.jsx)("p",{className:"text-lg",children:p})}),(0,s.jsxs)("div",{className:"flex flex-col text-center text-white",children:[(0,s.jsxs)("label",{className:"mt-2 cursor-pointer rounded-md bg-pa-green px-3 py-2",onClick:e=>{if(w){e.preventDefault();return}if(k){e.preventDefault(),S();return}},children:[w?(0,s.jsx)("span",{children:"Success!"}):(0,s.jsx)("span",{children:k?"Submit":"Check in"}),(0,s.jsx)("input",{htmlFor:"file",className:"sr-only",id:"file-upload",name:"file",type:"file",accept:"image/png, image/jpeg, image/jpg",onChange:e=>{e.target.files&&(v(e.target.files[0]),console.log(e.target.files))}})]}),(0,s.jsx)("span",{className:"mt-2",children:null==k?void 0:k.name})]})]})]}),(0,s.jsx)("h2",{className:"mt-12 text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl",children:"Image Gallery"}),y.length>0?(0,s.jsx)(h,{images:y}):(0,s.jsx)("div",{className:"flex h-20 flex-col justify-center text-center text-zinc-600 dark:text-zinc-400",children:"No Images Yet. Be the first!"}),(0,s.jsx)("div",{className:"mt-2 flex w-full flex-col justify-center",children:(0,s.jsx)("button",{className:"rounded-md bg-pa-green px-3 py-2 text-white",onClick:()=>{i.O.auth.signOut()},children:"Sign out"})})]})}function h(e){let t="https://waoitkfdrdzcsldypgzg.supabase.co/storage/v1/object/public/cs247b/";return(0,s.jsx)("ul",{role:"list",className:"mt-8 grid gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-8",children:e.images.map(e=>(0,s.jsxs)("li",{className:"relative",children:[(0,s.jsx)("div",{className:"group relative h-[30rem] w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100",children:(0,s.jsx)(d(),{src:t+x()+"/"+e.name,alt:"",className:"object-cover",fill:!0})}),(0,s.jsx)("p",{className:"mt-2 block truncate text-center text-sm font-medium text-zinc-600 dark:text-zinc-400",children:e.name.substring(0,e.name.lastIndexOf("."))}),(0,s.jsx)("p",{className:"text-center text-sm font-medium text-zinc-600 dark:text-zinc-400",children:new Date(e.created_at).toLocaleTimeString()})]},t+x()+"/"+e.name))})}}},function(e){e.O(0,[675,175,774,888,179],function(){return e(e.s=7602)}),_N_E=e.O()}]);