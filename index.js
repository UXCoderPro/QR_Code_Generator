


// ----------------

const frm=document.querySelector('#form');
const output=document.querySelector('#rightbox');
const spinner=document.querySelector('#loading');
const qrcodeElement=document.querySelector('#qrcode');
const btnSave=document.querySelector('#btn-2');



function generateQRCode(e){
  e.preventDefault();
  const url=document.querySelector('#url').value;
  const size=document.querySelector('#Size').value;
  const clrDark=document.querySelector('#colorbg').value;
  const clrLight=document.querySelector('#colorground').value;

  if(url===""){
    alert("Please Enter Your Website Link");
  }else{
    //Show Spinner
    spinner.style.display='flex';

    setTimeout(()=>{

        //Hide Spinner
        spinner.style.display='none';
        qrcodeElement.innerHTML="";

        const qrcode = new QRCode('qrcode',{
            text: url,
            width: size,
	        height: size,
            colorDark : clrDark,
	        colorLight : clrLight,
            correctLevel : QRCode.CorrectLevel.H
        });

    },1000);

    
    createDownloadLink();
  }
}
frm.addEventListener('submit',generateQRCode);

function createDownloadLink(){
  const imgSrc=qrcodeElement.querySelector('.img').src;
  btnSave.href=imgSrc;
}

btnSave.addEventListener('click',()=>{
  setTimeout(()=>{
    btnSave.download='qrcode';
  },50);
});