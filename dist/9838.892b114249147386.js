"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[9838],{51227:(I,E,u)=>{u.d(E,{C:()=>T});var _=u(4521),o=u(77579),g=u(39300),v=u(82722),M=u(5e3);let T=(()=>{class i{constructor(C,b){this._elementRef=C,this._router=b,this._unsubscribeAll=new o.x}ngOnInit(){this._router.events.pipe((0,g.h)(C=>C instanceof _.m2),(0,v.R)(this._unsubscribeAll)).subscribe(()=>{this._elementRef.nativeElement.scrollTop=0})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}}return i.\u0275fac=function(C){return new(C||i)(M.Y36(M.SBq),M.Y36(_.F0))},i.\u0275dir=M.lG2({type:i,selectors:[["","fuseScrollReset",""]],exportAs:["fuseScrollReset"]}),i})()},94384:(I,E,u)=>{u.d(E,{O:()=>o});var _=u(5e3);let o=(()=>{class g{}return g.\u0275fac=function(M){return new(M||g)},g.\u0275mod=_.oAB({type:g}),g.\u0275inj=_.cJS({}),g})()},45191:(I,E,u)=>{u.d(E,{b:()=>g});var _=u(68306),o=u(30576);function g(v){return!!v&&(v instanceof _.y||(0,o.m)(v.lift)&&(0,o.m)(v.subscribe))}},28258:(I,E,u)=>{u.d(E,{HI:()=>A,Xx:()=>c,_0:()=>m,nZ:()=>G,Hs:()=>n,rO:()=>B,cu:()=>O,XJ:()=>p,Ud:()=>D,C2:()=>k});var _=u(20449),o=u(77579),g=u(61135),v=u(45191),M=u(39646),T=u(82722),i=u(5e3),y=u(63191),C=u(50226);class k extends class b{constructor(){this.expansionModel=new _.Ov(!0)}toggle(t){this.expansionModel.toggle(this._trackByValue(t))}expand(t){this.expansionModel.select(this._trackByValue(t))}collapse(t){this.expansionModel.deselect(this._trackByValue(t))}isExpanded(t){return this.expansionModel.isSelected(this._trackByValue(t))}toggleDescendants(t){this.expansionModel.isSelected(this._trackByValue(t))?this.collapseDescendants(t):this.expandDescendants(t)}collapseAll(){this.expansionModel.clear()}expandDescendants(t){let e=[t];e.push(...this.getDescendants(t)),this.expansionModel.select(...e.map(s=>this._trackByValue(s)))}collapseDescendants(t){let e=[t];e.push(...this.getDescendants(t)),this.expansionModel.deselect(...e.map(s=>this._trackByValue(s)))}_trackByValue(t){return this.trackBy?this.trackBy(t):t}}{constructor(t,e,s){super(),this.getLevel=t,this.isExpandable=e,this.options=s,this.options&&(this.trackBy=this.options.trackBy)}getDescendants(t){const s=[];for(let l=this.dataNodes.indexOf(t)+1;l<this.dataNodes.length&&this.getLevel(t)<this.getLevel(this.dataNodes[l]);l++)s.push(this.dataNodes[l]);return s}expandAll(){this.expansionModel.select(...this.dataNodes.map(t=>this._trackByValue(t)))}}const A=new i.OlP("CDK_TREE_NODE_OUTLET_NODE");let O=(()=>{class r{constructor(e,s){this.viewContainer=e,this._node=s}}return r.\u0275fac=function(e){return new(e||r)(i.Y36(i.s_b),i.Y36(A,8))},r.\u0275dir=i.lG2({type:r,selectors:[["","cdkTreeNodeOutlet",""]]}),r})();class R{constructor(t){this.$implicit=t}}let B=(()=>{class r{constructor(e){this.template=e}}return r.\u0275fac=function(e){return new(e||r)(i.Y36(i.Rgc))},r.\u0275dir=i.lG2({type:r,selectors:[["","cdkTreeNodeDef",""]],inputs:{when:["cdkTreeNodeDefWhen","when"]}}),r})(),m=(()=>{class r{constructor(e,s){this._differs=e,this._changeDetectorRef=s,this._onDestroy=new o.x,this._levels=new Map,this.viewChange=new g.X({start:0,end:Number.MAX_VALUE})}get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&this._switchDataSource(e)}ngOnInit(){this._dataDiffer=this._differs.find([]).create(this.trackBy)}ngOnDestroy(){this._nodeOutlet.viewContainer.clear(),this.viewChange.complete(),this._onDestroy.next(),this._onDestroy.complete(),this._dataSource&&"function"==typeof this._dataSource.disconnect&&this.dataSource.disconnect(this),this._dataSubscription&&(this._dataSubscription.unsubscribe(),this._dataSubscription=null)}ngAfterContentChecked(){const e=this._nodeDefs.filter(s=>!s.when);this._defaultNodeDef=e[0],this.dataSource&&this._nodeDefs&&!this._dataSubscription&&this._observeRenderChanges()}_switchDataSource(e){this._dataSource&&"function"==typeof this._dataSource.disconnect&&this.dataSource.disconnect(this),this._dataSubscription&&(this._dataSubscription.unsubscribe(),this._dataSubscription=null),e||this._nodeOutlet.viewContainer.clear(),this._dataSource=e,this._nodeDefs&&this._observeRenderChanges()}_observeRenderChanges(){let e;(0,_.Z9)(this._dataSource)?e=this._dataSource.connect(this):(0,v.b)(this._dataSource)?e=this._dataSource:Array.isArray(this._dataSource)&&(e=(0,M.of)(this._dataSource)),e&&(this._dataSubscription=e.pipe((0,T.R)(this._onDestroy)).subscribe(s=>this.renderNodeChanges(s)))}renderNodeChanges(e,s=this._dataDiffer,l=this._nodeOutlet.viewContainer,h){const P=s.diff(e);!P||(P.forEachOperation((x,F,S)=>{if(null==x.previousIndex)this.insertNode(e[S],S,l,h);else if(null==S)l.remove(F),this._levels.delete(x.item);else{const j=l.get(F);l.move(j,S)}}),this._changeDetectorRef.detectChanges())}_getNodeDef(e,s){return 1===this._nodeDefs.length?this._nodeDefs.first:this._nodeDefs.find(h=>h.when&&h.when(s,e))||this._defaultNodeDef}insertNode(e,s,l,h){const P=this._getNodeDef(e,s),x=new R(e);x.level=this.treeControl.getLevel?this.treeControl.getLevel(e):void 0!==h&&this._levels.has(h)?this._levels.get(h)+1:0,this._levels.set(e,x.level),(l||this._nodeOutlet.viewContainer).createEmbeddedView(P.template,x,s),n.mostRecentTreeNode&&(n.mostRecentTreeNode.data=e)}}return r.\u0275fac=function(e){return new(e||r)(i.Y36(i.ZZ4),i.Y36(i.sBO))},r.\u0275cmp=i.Xpm({type:r,selectors:[["cdk-tree"]],contentQueries:function(e,s,l){if(1&e&&i.Suo(l,B,5),2&e){let h;i.iGM(h=i.CRH())&&(s._nodeDefs=h)}},viewQuery:function(e,s){if(1&e&&i.Gf(O,7),2&e){let l;i.iGM(l=i.CRH())&&(s._nodeOutlet=l.first)}},hostAttrs:["role","tree",1,"cdk-tree"],inputs:{dataSource:"dataSource",treeControl:"treeControl",trackBy:"trackBy"},exportAs:["cdkTree"],decls:1,vars:0,consts:[["cdkTreeNodeOutlet",""]],template:function(e,s){1&e&&i.GkF(0,0)},directives:[O],encapsulation:2}),r})(),n=(()=>{class r{constructor(e,s){this._elementRef=e,this._tree=s,this._destroyed=new o.x,this._dataChanges=new o.x,r.mostRecentTreeNode=this,this.role="treeitem"}get role(){return"treeitem"}set role(e){this._elementRef.nativeElement.setAttribute("role",e)}get data(){return this._data}set data(e){e!==this._data&&(this._data=e,this._setRoleFromData(),this._dataChanges.next())}get isExpanded(){return this._tree.treeControl.isExpanded(this._data)}get level(){return this._tree.treeControl.getLevel?this._tree.treeControl.getLevel(this._data):this._parentNodeAriaLevel}ngOnInit(){this._parentNodeAriaLevel=function d(r){let t=r.parentElement;for(;t&&!a(t);)t=t.parentElement;return t?t.classList.contains("cdk-nested-tree-node")?(0,y.su)(t.getAttribute("aria-level")):0:-1}(this._elementRef.nativeElement),this._elementRef.nativeElement.setAttribute("aria-level",`${this.level+1}`)}ngOnDestroy(){r.mostRecentTreeNode===this&&(r.mostRecentTreeNode=null),this._dataChanges.complete(),this._destroyed.next(),this._destroyed.complete()}focus(){this._elementRef.nativeElement.focus()}_setRoleFromData(){this.role="treeitem"}}return r.mostRecentTreeNode=null,r.\u0275fac=function(e){return new(e||r)(i.Y36(i.SBq),i.Y36(m))},r.\u0275dir=i.lG2({type:r,selectors:[["cdk-tree-node"]],hostAttrs:[1,"cdk-tree-node"],hostVars:1,hostBindings:function(e,s){2&e&&i.uIk("aria-expanded",s.isExpanded)},inputs:{role:"role"},exportAs:["cdkTreeNode"]}),r})();function a(r){const t=r.classList;return!(!(null==t?void 0:t.contains("cdk-nested-tree-node"))&&!(null==t?void 0:t.contains("cdk-tree")))}let c=(()=>{class r extends n{constructor(e,s,l){super(e,s),this._differs=l}ngAfterContentInit(){this._dataDiffer=this._differs.find([]).create(this._tree.trackBy);const e=this._tree.treeControl.getChildren(this.data);Array.isArray(e)?this.updateChildrenNodes(e):(0,v.b)(e)&&e.pipe((0,T.R)(this._destroyed)).subscribe(s=>this.updateChildrenNodes(s)),this.nodeOutlet.changes.pipe((0,T.R)(this._destroyed)).subscribe(()=>this.updateChildrenNodes())}ngOnInit(){super.ngOnInit()}ngOnDestroy(){this._clear(),super.ngOnDestroy()}updateChildrenNodes(e){const s=this._getNodeOutlet();e&&(this._children=e),s&&this._children?this._tree.renderNodeChanges(this._children,this._dataDiffer,s.viewContainer,this._data):this._dataDiffer.diff([])}_clear(){const e=this._getNodeOutlet();e&&(e.viewContainer.clear(),this._dataDiffer.diff([]))}_getNodeOutlet(){const e=this.nodeOutlet;return e&&e.find(s=>!s._node||s._node===this)}}return r.\u0275fac=function(e){return new(e||r)(i.Y36(i.SBq),i.Y36(m),i.Y36(i.ZZ4))},r.\u0275dir=i.lG2({type:r,selectors:[["cdk-nested-tree-node"]],contentQueries:function(e,s,l){if(1&e&&i.Suo(l,O,5),2&e){let h;i.iGM(h=i.CRH())&&(s.nodeOutlet=h)}},hostAttrs:[1,"cdk-nested-tree-node"],inputs:{role:"role",disabled:"disabled",tabIndex:"tabIndex"},exportAs:["cdkNestedTreeNode"],features:[i._Bn([{provide:n,useExisting:r},{provide:A,useExisting:r}]),i.qOj]}),r})();const f=/([A-Za-z%]+)$/;let p=(()=>{class r{constructor(e,s,l,h){this._treeNode=e,this._tree=s,this._element=l,this._dir=h,this._destroyed=new o.x,this.indentUnits="px",this._indent=40,this._setPadding(),h&&h.change.pipe((0,T.R)(this._destroyed)).subscribe(()=>this._setPadding(!0)),e._dataChanges.subscribe(()=>this._setPadding())}get level(){return this._level}set level(e){this._setLevelInput(e)}get indent(){return this._indent}set indent(e){this._setIndentInput(e)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_paddingIndent(){const e=this._treeNode.data&&this._tree.treeControl.getLevel?this._tree.treeControl.getLevel(this._treeNode.data):null,s=null==this._level?e:this._level;return"number"==typeof s?`${s*this._indent}${this.indentUnits}`:null}_setPadding(e=!1){const s=this._paddingIndent();if(s!==this._currentPadding||e){const l=this._element.nativeElement,h=this._dir&&"rtl"===this._dir.value?"paddingRight":"paddingLeft",P="paddingLeft"===h?"paddingRight":"paddingLeft";l.style[h]=s||"",l.style[P]="",this._currentPadding=s}}_setLevelInput(e){this._level=(0,y.su)(e,null),this._setPadding()}_setIndentInput(e){let s=e,l="px";if("string"==typeof e){const h=e.split(f);s=h[0],l=h[1]||l}this.indentUnits=l,this._indent=(0,y.su)(s),this._setPadding()}}return r.\u0275fac=function(e){return new(e||r)(i.Y36(n),i.Y36(m),i.Y36(i.SBq),i.Y36(C.Is,8))},r.\u0275dir=i.lG2({type:r,selectors:[["","cdkTreeNodePadding",""]],inputs:{level:["cdkTreeNodePadding","level"],indent:["cdkTreeNodePaddingIndent","indent"]}}),r})(),D=(()=>{class r{constructor(e,s){this._tree=e,this._treeNode=s,this._recursive=!1}get recursive(){return this._recursive}set recursive(e){this._recursive=(0,y.Ig)(e)}_toggle(e){this.recursive?this._tree.treeControl.toggleDescendants(this._treeNode.data):this._tree.treeControl.toggle(this._treeNode.data),e.stopPropagation()}}return r.\u0275fac=function(e){return new(e||r)(i.Y36(m),i.Y36(n))},r.\u0275dir=i.lG2({type:r,selectors:[["","cdkTreeNodeToggle",""]],hostBindings:function(e,s){1&e&&i.NdJ("click",function(h){return s._toggle(h)})},inputs:{recursive:["cdkTreeNodeToggleRecursive","recursive"]}}),r})(),G=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=i.oAB({type:r}),r.\u0275inj=i.cJS({}),r})()},90149:(I,E,u)=>{u.d(E,{gi:()=>B,kc:()=>W,JZ:()=>K,dp:()=>U,uo:()=>k,fQ:()=>L,ah:()=>O,eu:()=>w});var _=u(28258),o=u(5e3),g=u(90508),M=(u(63191),u(20449)),T=u(61135),i=u(56451),y=u(95698),C=u(54004);const b=(0,g.sb)((0,g.Id)(_.Hs));let k=(()=>{class n extends b{constructor(a,c,f){super(a,c),this.tabIndex=Number(f)||0}ngOnInit(){super.ngOnInit()}ngOnDestroy(){super.ngOnDestroy()}}return n.\u0275fac=function(a){return new(a||n)(o.Y36(o.SBq),o.Y36(_._0),o.$8M("tabindex"))},n.\u0275dir=o.lG2({type:n,selectors:[["mat-tree-node"]],hostAttrs:[1,"mat-tree-node"],inputs:{role:"role",disabled:"disabled",tabIndex:"tabIndex"},exportAs:["matTreeNode"],features:[o._Bn([{provide:_.Hs,useExisting:n}]),o.qOj]}),n})(),L=(()=>{class n extends _.rO{}return n.\u0275fac=function(){let d;return function(c){return(d||(d=o.n5z(n)))(c||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["","matTreeNodeDef",""]],inputs:{when:["matTreeNodeDefWhen","when"],data:["matTreeNode","data"]},features:[o._Bn([{provide:_.rO,useExisting:n}]),o.qOj]}),n})(),O=(()=>{class n extends _.XJ{get level(){return this._level}set level(a){this._setLevelInput(a)}get indent(){return this._indent}set indent(a){this._setIndentInput(a)}}return n.\u0275fac=function(){let d;return function(c){return(d||(d=o.n5z(n)))(c||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["","matTreeNodePadding",""]],inputs:{level:["matTreeNodePadding","level"],indent:["matTreeNodePaddingIndent","indent"]},features:[o._Bn([{provide:_.XJ,useExisting:n}]),o.qOj]}),n})(),R=(()=>{class n{constructor(a,c){this.viewContainer=a,this._node=c}}return n.\u0275fac=function(a){return new(a||n)(o.Y36(o.s_b),o.Y36(_.HI,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","matTreeNodeOutlet",""]],features:[o._Bn([{provide:_.cu,useExisting:n}])]}),n})(),B=(()=>{class n extends _._0{}return n.\u0275fac=function(){let d;return function(c){return(d||(d=o.n5z(n)))(c||n)}}(),n.\u0275cmp=o.Xpm({type:n,selectors:[["mat-tree"]],viewQuery:function(a,c){if(1&a&&o.Gf(R,7),2&a){let f;o.iGM(f=o.CRH())&&(c._nodeOutlet=f.first)}},hostAttrs:["role","tree",1,"mat-tree"],exportAs:["matTree"],features:[o._Bn([{provide:_._0,useExisting:n}]),o.qOj],decls:1,vars:0,consts:[["matTreeNodeOutlet",""]],template:function(a,c){1&a&&o.GkF(0,0)},directives:[R],styles:[".mat-tree{display:block}.mat-tree-node{display:flex;align-items:center;flex:1;word-wrap:break-word}.mat-nested-tree-node{border-bottom-width:0}\n"],encapsulation:2}),n})(),w=(()=>{class n extends _.Ud{}return n.\u0275fac=function(){let d;return function(c){return(d||(d=o.n5z(n)))(c||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["","matTreeNodeToggle",""]],inputs:{recursive:["matTreeNodeToggleRecursive","recursive"]},features:[o._Bn([{provide:_.Ud,useExisting:n}]),o.qOj]}),n})(),U=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[_.nZ,g.BQ],g.BQ]}),n})();class K{constructor(d,a,c,f){this.transformFunction=d,this.getLevel=a,this.isExpandable=c,this.getChildren=f}_flattenNode(d,a,c,f){const p=this.transformFunction(d,a);if(c.push(p),this.isExpandable(p)){const D=this.getChildren(d);D&&(Array.isArray(D)?this._flattenChildren(D,a,c,f):D.pipe((0,y.q)(1)).subscribe(N=>{this._flattenChildren(N,a,c,f)}))}return c}_flattenChildren(d,a,c,f){d.forEach((p,D)=>{let N=f.slice();N.push(D!=d.length-1),this._flattenNode(p,a+1,c,N)})}flattenNodes(d){let a=[];return d.forEach(c=>this._flattenNode(c,0,a,[])),a}expandFlattenedNodes(d,a){let c=[],f=[];return f[0]=!0,d.forEach(p=>{let D=!0;for(let N=0;N<=this.getLevel(p);N++)D=D&&f[N];D&&c.push(p),this.isExpandable(p)&&(f[this.getLevel(p)+1]=a.isExpanded(p))}),c}}class W extends M.o2{constructor(d,a,c){super(),this._treeControl=d,this._treeFlattener=a,this._flattenedData=new T.X([]),this._expandedData=new T.X([]),this._data=new T.X([]),c&&(this.data=c)}get data(){return this._data.value}set data(d){this._data.next(d),this._flattenedData.next(this._treeFlattener.flattenNodes(this.data)),this._treeControl.dataNodes=this._flattenedData.value}connect(d){return(0,i.T)(d.viewChange,this._treeControl.expansionModel.changed,this._flattenedData).pipe((0,C.U)(()=>(this._expandedData.next(this._treeFlattener.expandFlattenedNodes(this._flattenedData.value,this._treeControl)),this._expandedData.value)))}disconnect(){}}}}]);