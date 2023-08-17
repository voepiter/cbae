#! /usr/bin/env node
import{createRequire as e}from"module";var t={5:t=>{t.exports=e(import.meta.url)("node:crypto")},402:t=>{t.exports=e(import.meta.url)("node:stream/promises")}};var r={};function __nccwpck_require__(e){var i=r[e];if(i!==undefined){return i.exports}var n=r[e]={exports:{}};var o=true;try{t[e](n,n.exports,__nccwpck_require__);o=false}finally{if(o)delete r[e]}return n.exports}(()=>{var e=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;var t;__nccwpck_require__.t=function(r,i){if(i&1)r=this(r);if(i&8)return r;if(typeof r==="object"&&r){if(i&4&&r.__esModule)return r;if(i&16&&typeof r.then==="function")return r}var n=Object.create(null);__nccwpck_require__.r(n);var o={};t=t||[null,e({}),e([]),e(e)];for(var a=i&2&&r;typeof a=="object"&&!~t.indexOf(a);a=e(a)){Object.getOwnPropertyNames(a).forEach((e=>o[e]=()=>r[e]))}o["default"]=()=>r;__nccwpck_require__.d(n,o);return n}})();(()=>{__nccwpck_require__.d=(e,t)=>{for(var r in t){if(__nccwpck_require__.o(t,r)&&!__nccwpck_require__.o(e,r)){Object.defineProperty(e,r,{enumerable:true,get:t[r]})}}}})();(()=>{__nccwpck_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})();(()=>{__nccwpck_require__.r=e=>{if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})}})();if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=new URL(".",import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/)?1:0,-1)+"/";var i={};(()=>{var t={};__nccwpck_require__.r(t);__nccwpck_require__.d(t,{PromiseRun:()=>PromiseRun,bytesToMBStr:()=>bytesToMBStr,clamp:()=>clamp,copyFields:()=>copyFields,objectParseNumbers:()=>objectParseNumbers,randomInt:()=>randomInt,randomNum:()=>randomNum,roundFloat:()=>roundFloat});const r=e(import.meta.url)("node:fs");const i=e(import.meta.url)("node:path");const n=e(import.meta.url)("node:os");const o=e(import.meta.url)("node:process");var a=new Map([["darkgray","[90m"],["red","[91m"],["green","[92m"],["yellow","[93m"],["blue","[94m"],["magenta","[95m"],["cyan","[96m"],["white","[97m"],["black","[30m"],["darkred","[31m"],["darkgreen","[32m"],["darkyellow","[33m"],["darkblue","[34m"],["darkmagenta","[35m"],["darkcyan","[36m"],["gray","[37m"]]);var s=new Map([["darkgray","[100m"],["red","[101m"],["green","[102m"],["yellow","[103m"],["blue","[104m"],["magenta","[105m"],["cyan","[106m"],["white","[107m"],["black","[40m"],["darkred","[41m"],["darkgreen","[42m"],["darkyellow","[43m"],["darkblue","[44m"],["darkmagenta","[45m"],["darkcyan","[46m"],["gray","[47m"]]);class Terminal{EOL=n.EOL;print(e){o.stdout.write(e);return this}println(e){o.stdout.write(e+n.EOL);return this}n(e=1){return this.print(n.EOL.repeat(e))}fg(e){if(!e)return this.print("[39m");return this.print(a.get(e))}bg(e){if(!e)return this.print("[49m");return this.print(s.get(e))}reset(){return this.print("[0m")}clearLine(e=0){o.stdout.clearLine(e);return this}setCur(e=true){return this.print(e?"[?25h":"[?25l")}saveCur(){return this.print("[s")}loadCur(){return this.print("[u")}up(e=1){return this.print(`[${e}A`)}down(e=1){return this.print(`[${e}B`)}forward(e=1){return this.print(`[${e}C`)}back(e=1){return this.print(`[${e}D`)}move(e,t){process.stdout.cursorTo(e-1,t-1)}moveR(e,t){process.stdout.moveCursor(e,t)}ptag(e){return this.print(this.parseTags(e))}pac(e){return this.ptag(this.autoColor(e))}st(e){return e.replace(/<(\S+?)>/g,"")}autoColor(e){let t=/\b(\d+)|\[(.+?)\]|\{(.+?)\}|'(.+?)'|"(.+?)"|([\-+=:()?<>]+)/g;return e.replace(t,((e,t,r,i,n,o,a)=>{if(t)return`<cyan>${e}<!>`;if(r)return`<green,bold>${e}<!>`;if(i)return`<red,bold>${e}<!>`;if(n)return`<magenta,it>${e}<!>`;if(o)return`<yellow>${e}<!>`;if(a)return`<yellow,bold>${e}<!>`;return"X"}))}parseTags(e){const t=/<(\S+?)>/g;e=e.replace(t,((e,t)=>{let r=t.split(",");let i="";for(let t of r){switch(t){case"n":i+=n.EOL;break;case"t":i+="\t";break;case"!":i+="[0m";break;case"!fg":i+="[0m";break;case"!bg":i+="[0m";break;case"cs":i+="[s";break;case"cr":i+="[u";break;case"bold":i+="[1m";break;case"!bold":i+="[21m";break;case"underl":i+="[4m";break;case"!underl":i+="[24m";break;case"it":i+="[3m";break;case"!it":i+="[23m";break;default:if(t.indexOf(":")==0){let r=t.split(":")[1];if(s.has(r)){i+=s.get(r)}else{throw new Error(`Tag Error: Color Error ${e}`)}}else{if(a.get(t)){i+=a.get(t)}else{i+=e}}}}return i}));return e}}const l=new Terminal;const c={date:"HH:MM:SS",pos:false,stderr:false,bufferSize:2e3,file:"",level:-1};var u=3;var p=[];var f;function set(e){Object.assign(c,e);if(c.file)setLogFile(c.file);if(c.level>=0){u=c.level;if(u<0)u=0;else if(u>4)u=4}}function setLogFile(e){if(f==e)return;f=e;let t="-".repeat(40);let i=` == LOG ==\n ${t}\n - LogFile : ${f}\n - Created : ${dateFormat("YYYY-mm-dd HH:MM:SS")} \n - Script  : ${process.argv[1]}\n ${t}\n`;try{r.writeFileSync(f,i)}catch(e){f="";error(`Cannot Create Log File ${f}`);return}for(let e of p)pushFile(e)}let getStackTrace=function(){let e={};Error.captureStackTrace(e,getStackTrace);return e.stack};function pushFile(e){try{r.appendFileSync(f,e+"\n")}catch(e){f="";error("Cannot write to LOG FILE")}}function dateFormat(e){let t=new Date;let r={"Y+":t.getFullYear().toString(),"m+":(t.getMonth()+1).toString(),"d+":t.getDate().toString(),"H+":t.getHours().toString(),"M+":t.getMinutes().toString(),"S+":t.getSeconds().toString()};for(let t in r){let i=new RegExp("("+t+")");let n=i.exec(e);if(n){e=e.replace(n[1],n[1].length==1?r[t]:r[t].padStart(n[1].length,"0"))}}return e}function logMain(...e){let t=e.shift()+" ";if(c.date){t+=`${dateFormat(c.date)}|`}if(c.pos){let e=getStackTrace();let r=e.match(/\(.*?\)/g)||[];let i=r[2]||"";let n=i.slice(i.lastIndexOf("/")+1,-1);t+=`(${n}) `}if(c.stderr){console.error(t,...e)}e.forEach((e=>{if(typeof e=="object"){if(Array.isArray(e)){t+=` [${String(e)}]`}else{t+=` ${JSON.stringify(e)}`}}else{if(typeof e!="function")t+=` ${e}`}}));p.push(t);if(p.length>c.bufferSize)p.shift();if(f)pushFile(t)}function debug(...e){if(u<4)return;logMain("DEBUG",...e)}function log(...e){if(u<3)return;logMain("LOG",...e)}function warn(...e){if(u<2)return;logMain("WARNING",...e)}function error(...e){if(u<1)return;logMain("ERROR",...e)}const h={set:set,log:log,error:error,debug:debug,warn:warn,get BUFFER(){return p}};function createPath(e){if(!FS.existsSync(e))try{FS.mkdirSync(e,{recursive:true})}catch(t){L.error("Cannot create Path : "+e);return 0}return 1}function sanitizePath(e){return e.replace(/[\\/:"*?<>|]/g,"")}function getFile(e){let t;try{t=r.readFileSync(e,{encoding:"utf8"})}catch(e){return null}return t}function getFileLines(e){const t=getFile(e);if(t===null)return null;return t.replace("\r\n","\n").split("\n")}function copyPart(e,t,i=0,n=0,o="w"){return new Promise(((a,s)=>{let l;try{l=r.statSync(e)}catch(t){throw`Cannot read file '${e}'`}let c=l.size;if(n==0)n=c-i;else if(n+i>c){throw`Trying to copy more bytes than available in '${e}'`}let u=i+n-1;let p=r.createReadStream(e,{start:i,end:u,flags:"r"});p.once("error",(t=>s(`Could not read file '${e}'`)));let f=r.createWriteStream(t,{flags:o});f.once("error",(e=>s(`Could not write file '${t}'`)));h.debug(`Copying "${e}" BYTES [(from)::${i} (len)::${n} (end)::${u}] to "${t}"`);p.pipe(f);f.once("close",a)}))}function dirGlob0(e,t=process.cwd()){let n=i.parse(i.resolve(e));if(n.name!="*")return[];n.ext=n.ext.toLocaleLowerCase();let o;try{o=r.readdirSync(n.dir,{withFileTypes:true})}catch(e){h.error(`dirGlob0: Could not read "${n.dir}"`);return[]}let a=[];o.forEach((e=>{if(e.isFile())if(!n.ext||n.ext&&e.name.toLocaleLowerCase().endsWith(n.ext))a.push(i.relative(t,i.join(n.dir,e.name)))}));return a}function objectParseNumbers(e,t){let r={};let i=t.split(",");for(let[t,n]of Object.entries(e)){if(n instanceof Object&&!Array.isArray(n)){let e=[];for(let r of i){if(r.indexOf(t)==0){e.push(r.slice(r.indexOf(".")+1))}}if(e.length>0){r[t]=objectParseNumbers(n,e.join(","));continue}}else if(i.includes(t)||i[0]=="*"){if(Array.isArray(n)){r[t]=[];for(let e in n){if(typeof n[e]=="string")r[t][e]=parseFloat(n[e]);else r[t][e]=structuredClone(n[e])}continue}if(typeof n=="string"){r[t]=parseFloat(n);continue}}r[t]=structuredClone(n)}return r}function copyFields(e,t){if(e==null)return t;if(t==null)t={};for(let r in e){if(e[r]instanceof Array){Reflect.set(t,r,[...e[r]])}else if(typeof e[r]=="object"){Reflect.set(t,r,copyFields(e[r],t[r]))}else{Reflect.set(t,r,e[r])}}return t}var clamp=(e,t,r)=>Math.min(Math.max(e,t),r);var randomInt=(e,t)=>Math.round(Math.random()*(t-e))+e;var randomNum=(e,t)=>e+(e-t)*Math.random();var bytesToMBStr=e=>""+Math.ceil(e/(1024*1024));var roundFloat=(e,t=2)=>{e*=Math.pow(10,t);return Math.round(e)/Math.pow(10,t)};function PromiseRun(e,t=4,r){return new Promise(((i,n)=>{let o=0;let a=0;let s;function tryAdd(){if(s){if(o==0){h.error(`PromiseRun -- END WITH ERRORS (${s.length}) -- Run (${a})`);return n(s)}return}let t=e.next();if(t.done){if(o==0){h.log(`PromiseRun -- END -- ALL (${a}) SETTLED`);return i(0)}return}o++;t.value.catch((e=>{if(!s)s=[];if(e instanceof Error){s.push(e.message)}else{s.push(e)}})).finally((()=>{a++;o--;h.debug(`PromiseRun -- Completed (${a}) `);if(typeof r=="function")r(a);tryAdd()}))}h.log(`PromiseRun -- START -- Max parallel (${t})`);while(t--)tryAdd()}))}Object.defineProperty(Array.prototype,"last",{value:function(e=1){if(this==null){throw new TypeError("This is null or not defined")}if(this.length==0)return undefined;if(this.length-e<0)return this[0];return this[this.length-e]},writable:false,enumerable:false,configurable:false});Object.defineProperty(Array.prototype,"queueRun",{value:function(e){const t=this;const q=()=>{let r=t.shift();e.call(t,r,(()=>{process.nextTick(q)}))};q()},writable:true,enumerable:false,configurable:true});const d=40;var g={name:"app",ver:"0.1",desc:"",act:false,actions:{},options:{o:["-","y"],log:["-","y"]},help:{info:null,usage:null,post:null,noarg:false,io:"Io"}};const m={action:null,option:{},input:[],output:null,executable:i.basename(process.argv[1]),infos(){return g},_readArguments(){let e=2;let t="";if(process.argv.length==2&&g.help.noarg)return"HELP";while((t=process.argv[e++])!=null){if(t.charAt(0)==="-"){t=t.slice(1);if(t=="help"||t=="-help")return"HELP";let r=g.options[t];if(!r)return`Illegal Option <red>-${t}<!>`;if(typeof r=="object"&&r[1]!=null){let r=process.argv[e++];if(!r)return`Option <yellow>-${t}<!> requires a parameter`;this.option[t]=r}else{this.option[t]="1"}continue}if(g.actions[t]&&!this.action){this.action=t;continue}this.input.push(t)}this.output=this.option.o;delete this.option.o;if(!this.action)for(let e in g.actions)if(g.actions[e].charAt(0)=="!")this.action=e;if(g.act&&!this.action)return`Action is required`;if(this.input[0]?.includes("*")){let e=dirGlob0(this.input[0]);l.pac(` > glob returned ${e.length} files\n`);this.input.splice(0,1,...e)}for(let[e,t]of Object.entries(g.options)){if(typeof t=="string"||t[1]==null){if(!(e in this.option)){this.option[e]=""}}}return null},init(e){l.reset();g=copyFields(e,g);process.once("SIGINT",(()=>process.exit(1223)));process.once("exit",(e=>{h.log(`==> [EXIT] with code ${e}`);l.reset().setCur(true)}));h.log(`Creating App [ ${g.name} ,v${g.ver} ]`);var t=this._readArguments();if(t!=null){if(t=="HELP"){this.printHelp();process.exit(0)}this.printBanner();this.panic(t,true)}let r=this.option.log;if(r)h.set({file:r.split("=").pop(),level:parseInt(r[0])});h.log("- Inputs :",this.input);h.log("- Output :",this.output);h.log("- Action :",this.action);h.log("- Options :",this.option);h.log("-".repeat(30))},printBanner(e=false){let t="cyan";l.ptag(`\n<:${t},black>==<!><${t},bold> ${g.name} <darkgreen>v${g.ver}<!>`);l.ptag(` <it,darkgray>${g.desc??""}<!,n>`);if(e&&g.help.info){l.ptag(g.help.info).n()}l.fg("darkgray").println("-".repeat(d)).reset()},printHelp(){this.printBanner(true);const e=12;let sp=e=>" ".repeat(e);let t=Object.keys(g.actions).length>0;let r=Object.keys(g.options).length>2;let conv=(t,r="")=>{let i=t.split("<|>");i[0]+=r;return i.join(l.EOL+sp(e))};l.ptag("<cyan> Program Usage:").n();let i="   "+this.executable+" ";if(t)i+="<action> ";if(r)i+="[<options>...] ";let n=g.help.io.includes.bind(g.help.io);if(n("I"))i+="[<inputs>...] ";else if(n("i"))i+="<input> ";if(n("o"))i+="-o <output> ";l.ptag(`<bold,white>${i}<!,n>`);if(g.help.usage)l.ptag(g.help.usage).n();l.fg("darkgray").println("-".repeat(d));if(t){l.ptag("<cyan> <actions> <darkgray,it>(you can set one action at a time)<!,n>");for(let t in g.actions){let r="";let i=g.actions[t];if(i.charAt(0)=="-")continue;if(i.charAt(0)=="!"){i=i.slice(1);r=" <darkcyan,it>(default action)<!>"}l.ptag("<white,bold> "+t+"<!,gray>"+sp(e-t.length-1)+conv(i,r)).n()}}if(r){l.ptag("<cyan> <options> <darkgray,it>(you can set multiple options)<!,n>");for(let t in g.options){let r=typeof g.options[t]=="string"?g.options[t]:g.options[t][0];if(r.charAt(0)=="-")continue;let i=g.options[t][1]?" <darkcyan,it>(requires parameter)<!> "+(g.options[t][2]?`<darkgray,it>default(${g.options[t][2]})<!>`:""):"";l.ptag("<white,bold> -"+t+"<!,gray>"+sp(e-t.length-2)+conv(r,i)).n()}}if(g.help.post){l.fg("darkgray").println("-".repeat(d)).reset();l.ptag(g.help.post).n()}},panic(e,t){l.ptag(`<:darkred,white> ERROR <!> ${e}<!,n>`);if(t===true){l.ptag("<darkgray>"+"-".repeat(d)).n();l.ptag("<yellow> -help <!> for usage info").n()}h.error("APP: EXIT ERROR : "+l.st(e));process.exit(1)},assertIO(e="io"){let t={},r=this.input;for(let r of e)t[r]=true;try{if(t.i){if(r.length==0)throw"Requires Input";if(r.length>1&&!t.m)throw"Multiple Inputs not supported"}if(t.o){if(!this.output)throw"Requires Output"}}catch(e){this.panic(e)}}};const y={version:.1,APP:m,L:h,T:l,tools:t};async function getInputString(){return new Promise((e=>{const t=300;var r=0;var i=Buffer.alloc(t);try{r=fs.readSync(process.stdin.fd,i,0,t,null)}catch(t){e("")}if(i.readUInt8()==0)return e("^C");e(i.toString("utf-8",0,r-2))}))}var k={active:false,tick:250,timer:null,t_max:0,t_comp:0,t_str:"",c:1,cmax:7,start(e=0){l.saveCur();if(e>0)this.setTask(0,e);this.active=true;this.timer=setInterval(this._upd.bind(this),this.tick)},setTask(e,t){l.loadCur().print(" ".repeat(this.t_str.length)).loadCur();l.pac(this.t_str=`(${e}/${t}) `)},_upd(){l.loadCur();if(this.t_str){l.moveR(this.t_str.length,0)}l.clearLine(1).print(".".repeat(this.c));if(++this.c>this.cmax)this.c=1},stop(){if(!this.active)return false;clearInterval(this.timer);l.loadCur().clearLine(1);this.active=false;return true}};const b=e(import.meta.url)("node:child_process");class Proc2{static ID=0;id;exec;cwd;proc;onClose;logExit={err:"",out:"",code:0};log;onErr;onOut;constructor(e,t){this.id=++Proc2.ID;this.exec=e;this.cwd=t?.cwd;this.onClose=t?.onClose;this.log=t?.log;this.onErr=t?.onErr;this.onOut=t?.onOut}get stdin(){this.proc.stdin.once("error",(()=>{}));return this.proc.stdin}startP(e){return new Promise(((t,r)=>{this.onClose=e=>{if(e==0)return t(0);r(this.logExit)};this.start(e)}))}start(e){if(typeof e=="string")e=e.split("|");h.log(`AppRun (${this.id}): ${this.exec} ${e?e.join(" "):""} | cwd:${this.cwd??process.cwd()}`);let t=this.proc=(0,b.spawn)(this.exec,e,{cwd:this.cwd});if(!this.onClose)throw"forgot to set onClose";t.once("error",(e=>{let t=this.logExit;h.error(`AppRun (${this.id}): ERROR ${e.message}`);if(e.message.endsWith("ENOENT")){t.err=`Cannot execute "${this.exec}"`;t.code=2;return}t.err=e.message;t.code=1}));t.once("exit",((e,r)=>{let i=t.stderr.read();let n=t.stdout.read();this.logExit={err:i?Buffer.from(i).toString():"",out:n?Buffer.from(n).toString():"",code:e??0}}));t.once("close",((e,t)=>{this.kill();let r=this.logExit;if(e==0){h.log(`AppRun (${this.id}): CLOSE - OK`);return this.onClose(0)}if(r.code>0)e=r.code;else r.code=e;h.error(`AppRun (${this.id}): CLOSE - Error Code : ${e}\n`+`\tstdErr : ...${r.err.slice(-128)}`+`\tstdOut : ...${r.out.slice(-128)}`);return this.onClose(e)}));if(this.onErr){t.stderr.setEncoding("utf8");t.stderr.on("data",this.onErr)}if(this.onOut){t.stdout.setEncoding("utf8");t.stdout.on("data",this.onOut)}if(this.log){this.log.err=this.log.out="";t.stderr.setEncoding("utf8");t.stderr.on("data",(e=>this.log.err+=e));t.stdout.setEncoding("utf8");t.stdout.on("data",(e=>this.log.out+=e))}}kill(){if(this.proc){this.proc.removeAllListeners();this.proc.kill()}}static checkRun(e){try{(0,b.execSync)(e,{timeout:5e3,stdio:"ignore"})}catch(e){return false}return true}}const w=["BINARY","WAVE"];const $={AUDIO:2352,CDG:2448,MODE1_RAW:2352,"MODE1/2048":2048,"MODE1/2352":2352,MODE2_RAW:2352,"MODE2/2048":2048,"MODE2/2324":2324,"MODE2/2336":2336,"MODE2/2352":2352,"CDI/2336":2336,"CDI/2352":2352};class cdinfos{CD_TITLE;CD_SIZE=0;FILE_LOADED=null;FILE_DIR=null;tracks=[];opentrack=null;openfile=null;constructor(e){if(e)this.loadCue(e)}getTrackFilePath(e){return i.join(this.FILE_DIR,this.tracks[e].file??this.tracks[e].shared)}getAudioSize(){return this.tracks.reduce(((e,t)=>e+(t.isData?0:t.byteSize)),0)}generateCueForEncoded(e,t){let r=[];for(let i of this.tracks){let n=`${i.no}`.padStart(2,"0");let o=e+n;if(i.isData){r.push(`\tFILE "${o}.bin" BINARY`)}else{let e=t.slice(1).toUpperCase();r.push(`\tFILE "${o+t}" ${e}`)}r.push(`\t\tTRACK ${n} ${i.type}`);if(i.pregap)r.push(`\t\tPREGAP ${i.pregap}`);let a=i.indexes[0].toFrames();for(let e of i.indexes){let t=new cuetime(e.no,0,0,0);t.fromFrames(e.toFrames()-a);r.push(`\t\tINDEX ${t.no.toString().padStart(2,"0")} ${t}`)}}return r}loadCue(e){if(this.tracks.length>0)throw"Loading again unsupported. Make a new object";e=i.normalize(e);h.log(`loadCue() :: Loading "${e}"`);if(i.extname(e).toLowerCase()!=".cue")throw`Not a ".cue" file`;let t=getFileLines(e);if(!t)throw`Cannot load file "${e}"`;for(let e=0;e<t.length;e++){let r=t[e].trim();if(r.length==0)continue;try{this._cueParser(r)}catch(t){throw`Cue Parse Error on Line (${e+1}) : ${t}`}}this.FILE_LOADED=i.resolve(e);this.FILE_DIR=i.dirname(this.FILE_LOADED);if(this.tracks.length==0)throw"No Tracks in the cue file";this.opentrack?.validCheck();if(!this.CD_TITLE){let t=/([^\/\\]*)\.cue$/i;this.CD_TITLE=t.exec(e)[1]}for(let e=0,t=null,n=null;e<this.tracks.length;e++){let o=this.tracks[e];let a=this.tracks[e+1];if(o.file){t=o;let e=i.join(this.FILE_DIR,t.file);if(!r.existsSync(e))throw`File "${t.file}" does not exist in .cue directory`;let a=r.statSync(e);n=a.size;this.CD_SIZE+=n}else{o.shared=t.file}if(a&&!a.file){a.byteStart=$[t.type]*a.indexes[0].toFrames();o.byteSize=a.byteStart-o.byteStart}else{o.byteSize=n-o.byteStart}}h.log("CD_TITLE:",this.CD_TITLE," | CD_SIZE:",this.CD_SIZE,"| Tracks:",this.tracks.length);for(let e of this.tracks)h.debug(""+e);h.debug("-".repeat(30))}_cueParser(e){let t=e.toUpperCase();if(t.startsWith("REM")||t.startsWith(";"))return;if(t.startsWith("TITLE")){let e=/^\w+\s+\"(.+)\"/;let r=e.exec(t);if(r==null)throw"Line error, Bad Syntax";if(this.opentrack!=null)this.opentrack.title=r[1];else this.CD_TITLE=sanitizePath(r[1]);return}if(t.startsWith("FILE")){let t=/.+\"(.+)\"\s+(.+)/;let r=t.exec(e);if(r==null)throw"Line error, Bad Syntax";if(!w.includes(r[2])){throw"Unsupported TRACK File Type "+r[2]}this.opentrack?.validCheck();this.openfile=r[1];return}if(t.startsWith("TRACK")){if(this.openfile==null&&this.tracks.length==0)throw"A FILE has not been defined before TRACK 01";this.opentrack?.validCheck();let e=/^\w+\s+(\d+)\s+(\S+)/;let r=e.exec(t);if(r==null)throw"Line error, Bad Syntax";for(let e of this.tracks){if(e.no==parseInt(r[1])){throw`Track ${r[1]} is already defined`}}if(!$.hasOwnProperty(r[2])){throw"Unsupported Track type "+r[2]}this.opentrack=new cdtrack;this.opentrack.no=parseInt(r[1]);this.opentrack.type=r[2].toUpperCase();this.opentrack.file=this.openfile;this.openfile=null;this.tracks.push(this.opentrack);return}if(t.startsWith("INDEX")){if(this.opentrack==null)throw"A Track is not defined yet";let e=/^\w+\s+(\d+)\s+(\d{1,2}):(\d{1,2}):(\d{1,2})/;let r=e.exec(t);if(r==null)throw"Line error, Bad Syntax";if(this.opentrack.indexExists(parseInt(r[1]))){throw`Track ${this.opentrack.no} - Duplicate Index entry ${r[1]}`}this.opentrack.indexes.push(new cuetime(parseInt(r[1]),parseInt(r[2]),parseInt(r[3]),parseInt(r[4])));return}if(t.startsWith("PREGAP")){if(this.opentrack==null)throw"A Track is not defined yet";let e=/\w+\s+(\d{1,2}):(\d{1,2}):(\d{1,2})/;let r=e.exec(t);if(r==null)throw"Line error, Bad Syntax";this.opentrack.pregap=new cuetime(0,parseInt(r[1]),parseInt(r[2]),parseInt(r[3]));return}}}class cdtrack{file=null;type=null;no=0;title=null;pregap=null;indexes=[];hash="-";byteStart=0;byteSize=0;shared=null;indexExists(e){return this.indexes.some((t=>t.no==e))}validCheck(){if(!this.indexExists(1))throw`TRACK ${this.no} has no INDEX`}toString(){let e=this.indexes.reduce(((e,t)=>""+e+","+t));return`Track #${this.no}, type:${this.type}, indexes:[${e}], b0:${this.byteStart}, b1:${this.byteSize}, file:${this.file}, hash:${this.hash}, share:${this.shared}`}get isData(){return this.type!="AUDIO"}get noStr(){return this.no.toString().padStart(2,"0")}}class cuetime{no;minutes;seconds;frames;constructor(e,t,r,i){this.no=e;this.minutes=t;this.seconds=r;this.frames=i}toFrames(){return this.seconds*75+this.minutes*60*75+this.frames;z}fromFrames(e){this.minutes=Math.floor(e/4500);this.seconds=Math.floor(e%4500/75);this.frames=e%75}toString(){return this.minutes.toString().padStart(2,"0")+":"+this.seconds.toString().padStart(2,"0")+":"+this.frames.toString().padStart(2,"0")}}const{L:S,T:E,APP:_,tools:C}=y;const x=Math.ceil((0,n.cpus)().length*.75);const I={rawStr:"-f|s16le|-ar|44100|-ac|2",enc:{MP3:{name:"Mp3",ext:".mp3",pf:"k Cbr",min:32,max:320,get(e){return`-c:a|libmp3lame|-b:a|${e}k`}},MP3V:{name:"Mp3",ext:".mp3",pf:"k Vbr",min:44,max:256,get(e){return"-c:a|libmp3lame|-q:a|"+C.clamp(9-Math.round(9*(e-44)/212),0,9)}},VORBIS:{name:"Vorbis",ext:".ogg",pf:"k Vbr",min:64,max:500,get(e){let t=[64,80,96,112,128,160,192,224,256,320,500],r=0;while(e>t[r++]);if(r>10)r=10;let i=t[r-1];let n=(e-i)/(t[r]-i);return"-c:a|libvorbis|-q|"+C.roundFloat(r-1+n,2)}},OPUS:{name:"Opus",ext:".opus",pf:"k Vbr",min:28,max:500,get(e){return`-c:a|libopus|-vbr|on|-compression_level|10|-b:a|${e}k`}},FLAC:{name:"Flac Lossless",ext:".flac",get(){return"-c:a|flac"}},RAW:{name:"CDDA Raw",ext:".bin",get(){return"-c:a|pcm_s16le|-f|s16le|-ar|44100|-ac|2"}}},getEnc:function(e){if(!e)return null;let t=e.toUpperCase().split(":");let r=this.enc[t[0]];if(!r)return null;let i={ext:r.ext,desc:r.name,str:null};let n=parseInt(t[1]);if(Number.isNaN(n)){if(r.max)return null}if(r.max){n=C.clamp(n,r.min,r.max);i.desc+=` ${n}${r.pf}`}i.str=r.get(n);return i}};async function FilePartSHA1(e,t=0,i=0){let n;try{n=r.statSync(e)}catch(t){throw`Cannot read file '${e}'`}var o=await Promise.resolve().then(__nccwpck_require__.t.bind(__nccwpck_require__,5,19));var a=await Promise.resolve().then(__nccwpck_require__.t.bind(__nccwpck_require__,402,19));var s=o.createHash("sha1");let l=n.size;if(i==0)i=l-t;let c=t+i-1;S.debug("Reading SHA1 for ",e,t,c);let u=await r.promises.open(e,"r");let p=u.createReadStream({start:t,end:c});await a.pipeline(p,s);return s.digest("hex")}function createOuputDir(e,t){let n=t??e.FILE_DIR;n=i.resolve(i.normalize(n));n=i.join(n,e.CD_TITLE);n+=" [e]";if(O){n+=` [only ${O}]`}while(r.existsSync(n)){let e=/\((\d+)\)$/.exec(n);if(!e){n+=" (2)"}else{n=n.slice(0,e.index);n+="("+(parseInt(e[1])+1)+")"}}S.log(`Creating CD output dir "${n}"`);try{r.mkdirSync(n,{recursive:true})}catch(e){S.error(" .. FAILED");throw`Cannot create : "${n}"`}return n}function printEStats(e){let t=v.inputs.length;if(t<2)return;E.pac(` >> 'Input' (${t}) Cue Files\n`);E.pac(` >> [Encoded] (${v.success}/${t}) \n`);let func=(e,r)=>{if(e.size){E.pac(` >> ${r[0]} (${e.size}/${t}) ${r[1]}`);let i=0;e.forEach(((e,t)=>{E.pac(`\t${++i}.'${v.inputs[t]}' -- {${e}}\n`)}))}};func(v.skip,["{Skipped}","\n"]);func(v.error,["{Failed}","\n"]);E.n();if(e){E.ptag("<:darkmagenta,white> >> USER ABORTED  <!,n>")}}function taskEncodeCD(e){return new Promise(((t,n)=>{let o=Date.now();let a=new cdinfos;a.loadCue(e);if(a.tracks.every((e=>e.isData)))throw"+CD has no Audio Tracks";let s=0;let l=_.output;if(l=="=src")l=null;let c=createOuputDir(a,l);let u=_.option.sh?"track":a.CD_TITLE+" - Track ";let p="  - ";E.pac(`${p}Output : "${c}"\n`);if(O=="data"){E.pac(`${p}Processing `)}else{E.pac(`${p}Audio Enc : '${R.desc}'\n`);if(R.ext==".bin")E.pac(`${p}Copying Tracks `);else E.pac(`${p}Converting Tracks `)}k.start(a.tracks.length);const gen=function*(){for(let e=0;e<a.tracks.length;e++){let t=a.tracks[e];let n=i.join(c,u+t.noStr);let o=t.isData||R.ext==".bin";if(t.isData&&O=="audio"||!t.isData&&O=="data"){yield new Promise((e=>e()));continue}if(o){s+=t.byteSize;yield copyPart(a.getTrackFilePath(e),`${n}.bin`,t.byteStart,t.byteSize)}else{let i=r.createReadStream(a.getTrackFilePath(e),{start:t.byteStart,end:t.byteStart+t.byteSize-1,flags:"r"});let o=new Proc2("ffmpeg");let l=o.startP(`-y|${I.rawStr}|-i|pipe:0|${R.str}|${n+R.ext}`);o.proc.prependListener("close",(e=>{let t=o.logExit.err.slice(-120);let r=/audio:(\d+)kB/.exec(t);if(r)s+=parseInt(r[1])*1024}));i.pipe(o.stdin);yield l}}return 0};C.PromiseRun(gen(),_.option.p??x,(e=>{k.setTask(e,a.tracks.length)})).then((()=>{k.stop();let e=`${C.bytesToMBStr(a.CD_SIZE)}MB -> ${C.bytesToMBStr(s)}MB`;E.pac(`[OK]\n`);E.pac(p+`CD Size : `+e);E.ptag("<darkgray,it> | time "+new Date(Date.now()-o+500).toISOString().slice(14,19).replace(":","m:")+"s<!,n>");let t=["REM "+"-".repeat(50)];t.push("REM | "+a.CD_TITLE);t.push(t[0]);t.push(`REM | Converted with CBAE v${_.infos().ver} - Cue/Bin Audio Encoder`);t.push(`REM | CD Size : ${e}`);t.push("REM | Audio Quality : "+R.desc);t.push(t[0],"");t=t.concat(a.generateCueForEncoded(u,R.ext));let n=a.CD_TITLE+(O?" (partial)":"")+".cue";try{S.log("> All tracks Complete. Writing CUE file");r.writeFileSync(i.join(c,n),t.join("\n"))}catch(e){throw[`Failed to write : '${n}'`]}v.success++;v.size0+=a.CD_SIZE;v.size1+=s})).catch((e=>{console.error(e);if(k.stop()){E.n()}r.renameSync(c,`${c} (${Date.now()}) (failed)`);e=e[0];if(typeof e=="string"){n(e)}else{n("FFmpeg general error. Not enough disk space?")}})).then(t)}))}_.init({name:"CBAE",ver:"1.1",desc:"Cue/Bin Audio Encoder",actions:{e:"!Encode cue/bin to output folder. Will create the new<|>track files and the new .cue file under a subfolder",i:"Display cue/bin information along with SHA1 checksum of tracks "},options:{enc:["Audio Codec String <yellow>ID:KBPS<!> <|>"+"List of supported Encoders:<|>"+"<yellow>MP3<!>:(32-320) Constant Bitrate | <yellow>MP3V<!>:(44-256) Variable Bitrate <|>"+"<yellow>VORBIS<!>:(64-500) | <yellow>OPUS<!>:(28-500) | <yellow>FLAC<!> | <yellow>RAW<!> <|>"+"<darkgray,it> e.g. -enc OPUS:64 , -enc FLAC, -enc VORBIS:320<!>",1],p:["Set max parallel operations.",1,x],sh:["Short filenames for new Tracks | <darkgray>e.g. 'track01.bin track02.ogg ..'<!>"],only:["Process only <yellow>{data, audio}<!> from the tracks<|>For advanced use <darkgray>| e.g. -only audio<!>",1]},help:{io:"Io",info:`<darkgray>  Author : John32B | https://github.com/john32b/cbae <!,n>  Encodes the Audio Tracks of a cue/bin CD image and builds a new .cue file`,usage:`<t,magenta>input:<!> .cue files only. Supports multiple files.<n,t,magenta>output:<!> A new folder will be created for each cue/bin in this folder.<n,t,t>You can use <yellow>=src<!> for source folder`,post:`<magenta>Notes:<!,darkgray>\tUsing the <darkyellow>RAW<darkgray> encoder will just copy the audio tracks as they are,<n>\tthis is useful for cutting .bin files to individual track files.`}});var R;var v={inputs:null,success:0,error:new Map,skip:new Map,size0:0,size1:0};E.setCur(false);_.printBanner();var O=_.option.only;if(O=="data")_.option.enc="RAW";if(_.input.length==0){E.ptag("use <yellow>--help<!> for help<n>");process.exit(0)}if(_.action=="i"){_.assertIO("im");S.log("> Action: Information ::");let e=_.input.length;let t=0;_.input.queueRun(((r,i)=>{if(!r){process.exit(0)}let n=e>1?`(${++t}/${e}) `:"";E.pac(`\n==> Input ${n} : "${r}"\n`);let o=new cdinfos;try{o.loadCue(r)}catch(e){S.error(e);E.pac(`  > {ERROR} : ${e}\n`);return i()}let a=C.bytesToMBStr;let s=o.getAudioSize();E.pac(`  > CD Title:'${o.CD_TITLE}' | Size:${a(o.CD_SIZE)}MB (Data:${a(o.CD_SIZE-s)}MB Audio:${a(s)}MB) | Tracks ${o.tracks.length}\n`);[...o.tracks].queueRun(((e,t)=>{if(!e)return i();E.pac(`\t> Track${e.noStr} | Type:${e.type.padEnd(10)} | `);FilePartSHA1(o.getTrackFilePath(e.no-1),e.byteStart,e.byteSize).then((t=>{E.pac(`Size:${a(e.byteSize).padStart(3)}MB | SHA1: ${t}\n`)})).catch((e=>{E.pac(`{ ERROR READING } | file ${file} \n`)})).finally(t)}))}))}if(_.action=="e"){_.assertIO("imo");S.log("> Action: Encode ::");let e=_.input.length;let t=0;let printLine=()=>E.ptag("  <darkgray>"+"-".repeat(40)+"<!,n>");v.inputs=[..._.input];try{if(!Proc2.checkRun("ffmpeg -version"))throw"Cannot run ffmpeg. Is it set on path?";if(!_.option.enc)throw"You need to set an encoder with '-enc'";R=I.getEnc(_.option.enc);if(!R)throw"Encoding String Error."}catch(e){_.panic(E.autoColor(e))}process.prependOnceListener("exit",(e=>{k.stop();if(e==1223){E.ptag("<:darkmagenta,white> USER ABORT <!,n>");printLine()}printEStats(e==1223)}));_.input.queueRun(((r,i)=>{if(!r){process.exit(0)}let n=e>1?`(${t+1}/${e}) `:"";E.pac(`==> Input ${n} : "${r}"\n`);taskEncodeCD(r).catch((e=>{let r;if(e.charAt(0)=="+"){e=e.slice(1);v.skip.set(t,e);r="{warning}"}else{v.error.set(t,e);r="{ERROR}"}S.error(e);E.pac(`\t${r} : ${e}`).ptag(" | <cyan,it>skipping<!,n>")})).then((()=>{t++;printLine();i()}))}))}})();