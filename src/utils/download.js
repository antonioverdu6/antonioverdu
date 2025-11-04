// Utility to attempt fetching a file from public/ and trigger download or open it.
export async function downloadFromPublic(path, filename){
  try{
    const res = await fetch(path);
    if(!res.ok){
      throw new Error('Not found');
    }

    // If the response is a PDF, open in new tab to let browser handle preview/download
    const contentType = res.headers.get('content-type') || '';
    if(contentType.includes('application/pdf')){
      // Open file in new tab
      const url = path; // public path is directly accessible
      window.open(url, '_blank');
      return {ok:true};
    }

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || '';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    return {ok:true};
  }catch(err){
    return {ok:false, error: err.message};
  }
}
