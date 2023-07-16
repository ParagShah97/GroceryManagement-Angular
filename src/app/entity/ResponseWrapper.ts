export class ResponseWrapper{

    success:boolean;
    isException:boolean;
    isError:boolean;
    hasResult:boolean;
    exception:string;
    error:string;
    result:object;

    constructor(){
      this.success=true;
      this.isException=false;
      this.isError=false;
      this.hasResult=false;
      this.exception="";
      this.error="";
      this.result=null;
    }

}