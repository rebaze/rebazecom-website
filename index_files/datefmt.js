function addDateFormat(C,A,B,D){C.options[A]=new Option(new DateFormat(D).format(B),D);}function fillDateFormatBox(C,E){var D=new Date();D.setHours(22);D.setMinutes(5);var B=0;var A=C.selectedIndex;addDateFormat(C,B++,D,"EEEE, MMMM d, yyyy 'at' h:mm a");addDateFormat(C,B++,D,"EEEE, MMMM d, yyyy 'at' h:mma");addDateFormat(C,B++,D,"EEEE, MMMM d, yyyy 'at' H:mm");addDateFormat(C,B++,D,"EEEE, MMMM d, yyyy");addDateFormat(C,B++,D,"EEEE, MMMM d");addDateFormat(C,B++,D,"EEE, MMMM d, yyyy 'at' h:mm a");addDateFormat(C,B++,D,"EEE, MMMM d, yyyy 'at' h:mma");addDateFormat(C,B++,D,"EEE, MMMM d, yyyy 'at' H:mm");addDateFormat(C,B++,D,"EEE, MMMM d, yyyy");addDateFormat(C,B++,D,"EEE, MMMM d");addDateFormat(C,B++,D,"EEEE");addDateFormat(C,B++,D,"MMMM d, yyyy 'at' h:mm a");addDateFormat(C,B++,D,"MMMM d, yyyy 'at' h:mma");addDateFormat(C,B++,D,"MMMM d, yyyy 'at' H:mm");addDateFormat(C,B++,D,"MMMM d, yyyy");addDateFormat(C,B++,D,"MMMM d");addDateFormat(C,B++,D,"MMM d, yyyy 'at' h:mm a");addDateFormat(C,B++,D,"MMM d, yyyy 'at' h:mma");addDateFormat(C,B++,D,"MMM d, yyyy 'at' H:mm");addDateFormat(C,B++,D,"MMM d, yyyy");addDateFormat(C,B++,D,"MMM d");addDateFormat(C,B++,D,"MM-d-yyyy");addDateFormat(C,B++,D,"MM.d.yyyy");addDateFormat(C,B++,D,"MMdyyyy");addDateFormat(C,B++,D,"MM.d");addDateFormat(C,B++,D,"MM-d");addDateFormat(C,B++,D,"MM/d");addDateFormat(C,B++,D,"h:mm a");addDateFormat(C,B++,D,"h:mma");addDateFormat(C,B++,D,"H:mm");addDateFormat(C,B++,D,"h a");addDateFormat(C,B++,D,"ha");addDateFormat(C,B++,D,"H");C.options[B++]=new Option("(None)","");if(E){C.options[B++]=new Option("Custom...","custom");}if(A!=-1){C.selectedIndex=A;}}function DateFormat(){var A=DateFormat.arguments;var B=A.length;if(B==0){this.pattern="";this.locale=Locale.availableLocales[Locale.DEFAULT];}else{if(typeof A[0]=="string"){this.pattern=A[0];this.locale=(B>=2)?A[1]:Locale.availableLocales[Locale.DEFAULT];}else{this.locale=B>=3&&A[2]?A[2]:Locale.availableLocales[Locale.DEFAULT];this.setStyle(A[0],B>1?A[1]:DateFormat.NONE);}}}function _DateFormat_format(A){if(!A){return"";}if(typeof A=="string"){A=new Date(A);}var B="";var G=0;while(G<this.pattern.length){var F=this.pattern.charAt(G);var C;var D=DateFormat.SYMBOLS[F];if(D){C=this._consume(G,F);B+=D.format(A,C,this.locale);}else{if(F=="'"){if(G>=this.pattern.length-1){C=1;B+=F;}else{if(this.pattern.charAt(G+1)!="'"){var E=this.pattern.indexOf("'",++G);if(E==-1){E=this.pattern.length;}C=(E-G)+1;B+=this.pattern.substring(G,E);}else{C=2;B+=F;}}}else{C=1;B+=F;}}G+=C;}return B;}function _DateFormat_setStyle(A,B){A=parseInt(A);B=parseInt(B);this.pattern=this.locale.datePattern[A];if(this.pattern&&B){this.pattern+=" ";}this.pattern+=this.locale.timePattern[B];}function _DateFormat_consume(C,B){var A=C;while(++A<this.pattern.length){if(this.pattern.charAt(A)!=B){break;}}return A-C;}function _DateFormat_formatNumber(G,B,A){var E="";var F=(new String(G)).length;var C=Math.max(0,B-F);for(var D=0;D<C;D++){E+="0";}return E+G;}function _DateFormat_formatEra(D,C,A){var B=D<0?DateFormat.BC:DateFormat.AD;return A.era[B];}function _DateFormat_formatMonth(D,C,B){if(C<3){return DateFormat._formatNumber(D+1,C,B);}else{var A=C==3?B.shortMonths:B.longMonths;return A[D];}}function _DateFormat_formatWeekday(D,C,A){var B=C<4?A.shortWeekdays:A.longWeekdays;return B[D];}function _DateFormat_formatAMPM(C,B,A){var D=C<=12&&C>0?DateFormat.AM:DateFormat.PM;return A.amPm[D];}function _DateFormat_formatTimezone(F,C,A){var E=Math.abs(F);var B=DateFormat._formatNumber(parseInt(E/60),2);var D=DateFormat._formatNumber(E%60,2);return"GMT"+(F>0?"-":"+")+B+":"+D;}function _DateFormat_formatMillis(C,B,A){var D=new Date(C.getFullYear(),C.getMonth(),C.getDate(),C.getHours(),C.getMinutes(),C.getSeconds());return DateFormat._formatNumber(C.getTime()-D.getTime(),B,A);}function _DateFormat_formatYear(D,C,B){var E=D.getYear();var A=D.getFullYear();if(E!=A&&E==100){E=0;}var F=C>2?A:E;return DateFormat._formatNumber(F,C,B);}DateFormat.NONE=0;DateFormat.SHORT=1;DateFormat.MEDIUM=2;DateFormat.LONG=3;DateFormat.FULL=4;DateFormat.NSTYLES=5;DateFormat.BC=0;DateFormat.AD=1;DateFormat.AM=0;DateFormat.PM=1;DateFormat._formatNumber=_DateFormat_formatNumber;DateFormat._formatEra=_DateFormat_formatEra;DateFormat._formatMonth=_DateFormat_formatMonth;DateFormat._formatWeekday=_DateFormat_formatWeekday;DateFormat._formatAmPm=_DateFormat_formatAMPM;DateFormat._formatTimzone=_DateFormat_formatTimezone;DateFormat._formatMillis=_DateFormat_formatMillis;DateFormat._formatYear=_DateFormat_formatYear;DateFormat.SYMBOLS=new Object();DateFormat.SYMBOLS["G"]=new _DFSymbol(DateFormat._formatEra,"date.getFullYear()");DateFormat.SYMBOLS["y"]=new _DFSymbol(DateFormat._formatYear,"date");DateFormat.SYMBOLS["M"]=new _DFSymbol(DateFormat._formatMonth,"date.getMonth()");DateFormat.SYMBOLS["d"]=new _DFSymbol(DateFormat._formatNumber,"date.getDate()");DateFormat.SYMBOLS["h"]=new _DFSymbol(DateFormat._formatNumber,"date.getHours() > 12 ? date.getHours() - 12 : (date.getHours() > 0 ? date.getHours() : 12)");DateFormat.SYMBOLS["H"]=new _DFSymbol(DateFormat._formatNumber,"date.getHours()");DateFormat.SYMBOLS["m"]=new _DFSymbol(DateFormat._formatNumber,"date.getMinutes()");DateFormat.SYMBOLS["s"]=new _DFSymbol(DateFormat._formatNumber,"date.getSeconds()");DateFormat.SYMBOLS["S"]=new _DFSymbol(DateFormat._formatMillis,"date");DateFormat.SYMBOLS["E"]=new _DFSymbol(DateFormat._formatWeekday,"date.getDay()");DateFormat.SYMBOLS["D"]=new _DFSymbol();DateFormat.SYMBOLS["F"]=new _DFSymbol();DateFormat.SYMBOLS["w"]=new _DFSymbol();DateFormat.SYMBOLS["W"]=new _DFSymbol();DateFormat.SYMBOLS["a"]=new _DFSymbol(DateFormat._formatAmPm,"date.getHours()");DateFormat.SYMBOLS["k"]=new _DFSymbol(DateFormat._formatNumber,"date.getHours() + 1");DateFormat.SYMBOLS["K"]=new _DFSymbol(DateFormat._formatNumber,"date.getHours() > 11 ? date.getHours() - 12 : date.getHours()");DateFormat.SYMBOLS["z"]=new _DFSymbol(DateFormat._formatTimezone,"date.getTimezoneOffset()");DateFormat.prototype.format=_DateFormat_format;DateFormat.prototype.setStyle=_DateFormat_setStyle;DateFormat.prototype._consume=_DateFormat_consume;function _DFSymbol(A,B){this.func=A;this.value=B;}function _DFSymbol_format(date,l,locale){return this.func?this.func(eval(this.value),l,locale):"";}_DFSymbol.prototype.format=_DFSymbol_format;function Locale(A,B){this.name=A;Locale.availableLocales[this.name]=this;this.shortWeekdays=new Array("","","","","","","");this.longWeekdays=new Array("","","","","","","");this.shortMonths=new Array("","","","","","","","","","","","");this.longMonths=new Array("","","","","","","","","","","","");this.era=new Array("","");this.amPm=new Array("","");this.datePattern=new Array("","","","","");this.timePattern=new Array("","","","","");if(B){if(typeof B=="string"){B=Locale.availableLocales[B];}copy(B.shortWeekdays,this.shortWeekdays);copy(B.longWeekdays,this.longWeekdays);copy(B.shortMonths,this.shortMonths);copy(B.longMonths,this.longMonths);copy(B.era,this.era);copy(B.amPm,this.amPm);copy(B.datePattern,this.datePattern);copy(B.timePattern,this.timePattern);}}function _Locale_toString(){return this.name;}Locale.prototype.toString=_Locale_toString;Locale.availableLocales=new Object();function copy(A,C){if(!C){C=new Object();}for(var B in A){C[B]=A[B];}return C;}var tmp;Locale.DEFAULT="en";tmp=new Locale("en");tmp.shortWeekdays=new Array("Sun","Mon","Tue","Wed","Thr","Fri","Sat");tmp.longWeekdays=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");tmp.shortMonths=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");tmp.longMonths=new Array("January","February","March","April","May","June","July","August","September","October","November","December");tmp.era=new Array("BC","AD");tmp.amPm=new Array("AM","PM");tmp.datePattern=new Array("","M/d/yy","MMM d, yyyy","MMMM d, yyyy","EEEE, MMMM d, yyyy");tmp.timePattern=new Array("","h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a z");tmp=new Locale("en_GB","en");tmp.datePattern=new Array("","dd/MM/yy","dd-MMM-yyyy","dd MMMM yyyy","dd MMMM yyyy");tmp.timePattern=new Array("","HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss o''cloc'k' z");tmp=new Locale("de");tmp.shortWeekdays=new Array("So","Mo","Di","Mi","Do","Fr","Sa");tmp.longWeekdays=new Array("Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag");tmp.shortMonths=new Array("Jan","Feb","Mrz","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez");tmp.longMonths=new Array("Januar","Februar","M&auml;rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember");tmp.era=new Array("v. Chr.","n. Chr.");tmp.datePattern=new Array("","dd.MM.yy","dd.MM.yyyy","dd. MMMM yyyy","d. MMMM yyyy");tmp.timePattern=new Array("","HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss U'h'r z");tmp=new Locale("de_AT","de");tmp.shortMonths=new Array("J&auml;n","Feb","M&auml;r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez");tmp.longMonths=new Array("J&auml;nner","Februar","M&auml;rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember");tmp=new Locale("fr");tmp.shortWeekdays=new Array("dim.","lun.","mar.","mer.","jeu.","ven.","sam.");tmp.longWeekdays=new Array("dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi");tmp.shortMonths=new Array("janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc.");tmp.longMonths=new Array("janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre");tmp.era=new Array("BC","ap. J.-C.");tmp.datePattern=new Array("","dd/MM/yy","d MMM yy","d MMMM yyyy","EEEE d MMMM yyyy");tmp.timePattern=new Array("","HH:mm","HH:mm:ss","HH:mm:ss z","HH 'h' mm z");tmp=new Locale("it");tmp.shortWeekdays=new Array("dom","lun","mar","mer","gio","ven","sab");tmp.longWeekdays=new Array("domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato");tmp.shortMonths=new Array("gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic");tmp.longMonths=new Array("gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre");tmp.era=new Array("BC","dopo Cristo");tmp.datePattern=new Array("","dd/MM/yy","d-MMM-yy","d MMMM yyyy","EEEE d MMMM yyyy");tmp.timePattern=new Array("","H.mm","H.mm.ss","HH.mm.ss z","HH.mm.ss z");tmp=new Locale("es");tmp.shortWeekdays=new Array("dom","lun","mar","mié","jue","vie","sáb");tmp.longWeekdays=new Array("domingo","lunes","martes","miércoles","jueves","viernes","sábado");tmp.shortMonths=new Array("ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic");tmp.longMonths=new Array("enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre");tmp.era=new Array("BC","AD");tmp.datePattern=new Array("","d/MM/yy","d-MMM-yy","d 'de' MMMM 'de' yyyy","EEEE d 'de' MMMM 'de' yyyy");tmp.timePattern=new Array("","H:mm","H:mm:ss","HH:mm:ss z","HH'H'mm'' z");tmp=new Locale("pt");tmp.shortWeekdays=new Array("Dom","Seg","Ter","Qua","Qui","Sex","Sáb");tmp.longWeekdays=new Array("Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado");tmp.shortMonths=new Array("Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez");tmp.longMonths=new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");tmp.era=new Array("BC","AD");tmp.datePattern=new Array("","dd-MM-yy","d/MMM/yy","d 'de' MMMM 'de' yyyy","EEEE, d 'de' MMMM 'de' yyyy");tmp.timePattern=new Array("","H:mm","H:mm:ss","HH:mm:ss z","HH'H'mm'm' z");