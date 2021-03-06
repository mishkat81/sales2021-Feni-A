//National Target
let jan_n_target = 295000000;
let feb_n_target = 300000000;
let mar_n_target = 0;
let apr_n_target = 0;
let may_n_target = 0;
let jun_n_target = 0;
let jul_n_target = 0;
let aug_n_target = 0;
let sep_n_target = 0;
let oct_n_target = 0;
let nov_n_target = 0;
let dec_n_target = 0;
let total_n_target = `${jan_n_target+feb_n_target+mar_n_target+apr_n_target+may_n_target+jun_n_target+jul_n_target+aug_n_target+sep_n_target+oct_n_target+nov_n_target+dec_n_target}`;

//======================Sold Area Start=================

// Total Sold Yearly Kamrul
let jan_k_sold = 200391.89; let feb_k_sold = 202460.98; let mar_k_sold = 0; let apr_k_sold = 0; let may_k_sold = 0; let jun_k_sold = 0; let jul_k_sold = 0; let aug_k_sold = 0; let sep_k_sold = 0; let oct_k_sold = 0; let nov_k_sold = 0; let dec_k_sold = 0;
let kamrul_total_sold = `${jan_k_sold+feb_k_sold+mar_k_sold+apr_k_sold+may_k_sold+jun_k_sold+jul_k_sold+aug_k_sold+sep_k_sold+oct_k_sold+nov_k_sold+dec_k_sold}`;

// Total Sold Yearly Ibrahim
let jan_i_sold = 296346.29; let feb_i_sold = 266316.84; let mar_i_sold = 0; let apr_i_sold = 0; let may_i_sold = 0; let jun_i_sold = 0; let jul_i_sold = 0; let aug_i_sold = 0; let sep_i_sold = 0; let oct_i_sold = 0; let nov_i_sold = 0; let dec_i_sold = 0;
let ibrahim_total_sold = `${jan_i_sold+feb_i_sold+mar_i_sold+apr_i_sold+may_i_sold+jun_i_sold+jul_i_sold+aug_i_sold+sep_i_sold+oct_i_sold+nov_i_sold+dec_i_sold}`;

// Total Sold Yearly Faysal
let jan_f_sold = 236278.53; let feb_f_sold = 191027.08; let mar_f_sold = 0; let apr_f_sold = 0; let may_f_sold = 0; let jun_f_sold = 0; let jul_f_sold = 0; let aug_f_sold = 0; let sep_f_sold = 0; let oct_f_sold = 0; let nov_f_sold = 0; let dec_f_sold = 0;
let faysal_total_sold = `${jan_f_sold+feb_f_sold+mar_f_sold+apr_f_sold+may_f_sold+jun_f_sold+jul_f_sold+aug_f_sold+sep_f_sold+oct_f_sold+nov_f_sold+dec_f_sold}`;

// Total Sold Yearly Sohel
let jan_s_sold = 262542.96; let feb_s_sold = 184728.53; let mar_s_sold = 0; let apr_s_sold = 0; let may_s_sold = 0; let jun_s_sold = 0; let jul_s_sold = 0; let aug_s_sold = 0; let sep_s_sold = 0; let oct_s_sold = 0; let nov_s_sold = 0; let dec_s_sold = 0;
let sohel_total_sold = `${jan_s_sold+feb_s_sold+mar_s_sold+apr_s_sold+may_s_sold+jun_s_sold+jul_s_sold+aug_s_sold+sep_s_sold+oct_s_sold+nov_s_sold+dec_s_sold}`;

// Total Sold Yearly Haron (Vacant from 03-01-2021 and eefective from 08-01-2021)
let jan_h_sold = 118087.34; let feb_h_sold = 103351.65; let mar_h_sold = 0; let apr_h_sold = 0; let may_h_sold = 0; let jun_h_sold = 0; let jul_h_sold = 0; let aug_h_sold = 0; let sep_h_sold = 0; let oct_h_sold = 0; let nov_h_sold = 0; let dec_h_sold = 0;
let haron_total_sold = `${jan_h_sold+feb_h_sold+mar_h_sold+apr_h_sold+may_h_sold+jun_h_sold+jul_h_sold+aug_h_sold+sep_h_sold+oct_h_sold+nov_h_sold+dec_h_sold}`;

// Total Sold Yearly Mishkat
let mishkat_total_sold = `${Number(kamrul_total_sold)+Number(ibrahim_total_sold)+Number(faysal_total_sold)+Number(sohel_total_sold)+Number(haron_total_sold)}`;
let jan_m_sold = `${jan_k_sold+jan_i_sold+jan_f_sold+jan_s_sold+jan_h_sold}`;
let feb_m_sold = `${feb_k_sold+feb_i_sold+feb_f_sold+feb_s_sold+feb_h_sold}`;

//======================Sold Area End=================

function mTargetSoldAchi1(share, sold) {
    let target = (share * jan_n_target)/100;
    let mSold = sold;
    let mAchi = Math.round((sold / target) * 100).toFixed(2);
    return `${Math.round(target)} / ${Math.round(mSold)} / ${Math.round(mAchi)}%`;
}

function mTargetSoldAchi2(share, sold) {
    let target = (share * feb_n_target)/100;
    let mSold = sold;
    let mAchi = Math.round((sold / target) * 100).toFixed(2);
    return `${Math.round(target)} / ${Math.round(mSold)} / ${Math.round(mAchi)}%`;
}




//=========FIXED=============FOR January Target/ Sold/ Achi Area Start=================

//January Target / Sold / Achivement
let jan_kamrul = mTargetSoldAchi1(0.08, jan_k_sold);
let jan_ibrahim = mTargetSoldAchi1(0.10, jan_i_sold);
let jan_faysal = mTargetSoldAchi1(0.08, jan_f_sold);
let jan_sohel = mTargetSoldAchi1(0.11, jan_s_sold);
let jan_haron = mTargetSoldAchi1(0.07, jan_h_sold);
let jan_mishkat = mTargetSoldAchi1(0.44, jan_m_sold);

//=========FIXED=============January Target/ Sold/ Achi Area Start=================

//=========FIXED=============FOR January Target/ Sold/ Achi Area Start=================

//February Target / Sold / Achivement
let feb_kamrul = mTargetSoldAchi2(0.08, feb_k_sold);
let feb_ibrahim = mTargetSoldAchi2(0.10, feb_i_sold);
let feb_faysal = mTargetSoldAchi2(0.08, feb_f_sold);
let feb_sohel = mTargetSoldAchi2(0.11, feb_s_sold);
let feb_haron = mTargetSoldAchi2(0.07, feb_h_sold);
let feb_mishkat = mTargetSoldAchi2(0.44, feb_m_sold);

//=========FIXED=============January Target/ Sold/ Achi Area Start=================





//=========FIXED=============Total Target Area Start=================

//Total Target yearly
let kamrul_total_target = `${(.08*Math.round(total_n_target).toFixed(2))/100}`;
let ibrahim_total_target = `${(.10*Math.round(total_n_target).toFixed(2))/100}`;
let faysal_total_target = `${(.08*Math.round(total_n_target).toFixed(2))/100}`;
let sohel_total_target = `${(.11*Math.round(total_n_target).toFixed(2))/100}`;
let haron_total_target = `${(.07*Math.round(total_n_target).toFixed(2))/100}`;
let mishkat_total_target = `${(.44*Math.round(total_n_target).toFixed(2))/100}`;

//=========FIXED=============Total Target Area Start=================

const colleguesDetails = [
    {'name':'Kamrul Islam','t_target_y':`${kamrul_total_target}`,'t_sold_y':`${Math.round(kamrul_total_sold)}`,'t_achi_y':`${Math.round(kamrul_total_sold/kamrul_total_target*100).toFixed(2)}%`,'jan':`${jan_kamrul}`,'feb':`${feb_kamrul}`,'mar':`${0}`,'apr':`${0}`,'may':`${0}`,'jun':`${0}`,'jul':`${0}`,'aug':`${0}`,'sep':`${0}`,'oct':`${0}`,'nov':`${0}`,'dec':`${0}`},
    {'name':'Ebrahim Khalil','t_target_y':`${ibrahim_total_target}`,'t_sold_y':`${Math.round(ibrahim_total_sold)}`,'t_achi_y':`${Math.round(ibrahim_total_sold/ibrahim_total_target*100).toFixed(2)}%`,'jan':`${jan_ibrahim}`,'feb':`${feb_ibrahim}`,'mar':`${0}`,'apr':`${0}`,'may':`${0}`,'jun':`${0}`,'jul':`${0}`,'aug':`${0}`,'sep':`${0}`,'oct':`${0}`,'nov':`${0}`,'dec':`${0}`},
    {'name':'Faysal Karim','t_target_y':`${faysal_total_target}`,'t_sold_y':`${Math.round(faysal_total_sold)}`,'t_achi_y':`${Math.round(faysal_total_sold/faysal_total_target*100).toFixed(2)}%`,'jan':`${jan_faysal}`,'feb':`${feb_faysal}`,'mar':`${0}`,'apr':`${0}`,'may':`${0}`,'jun':`${0}`,'jul':`${0}`,'aug':`${0}`,'sep':`${0}`,'oct':`${0}`,'nov':`${0}`,'dec':`${0}`},
    {'name':'Sohel Rana','t_target_y':`${sohel_total_target}`,'t_sold_y':`${Math.round(sohel_total_sold)}`,'t_achi_y':`${Math.round(sohel_total_sold/sohel_total_target*100).toFixed(2)}%`,'jan':`${jan_sohel}`,'feb':`${feb_sohel}`,'mar':`${0}`,'apr':`${0}`,'may':`${0}`,'jun':`${0}`,'jul':`${0}`,'aug':`${0}`,'sep':`${0}`,'oct':`${0}`,'nov':`${0}`,'dec':`${0}`},
    {'name':'Vacant (from 09-01-2021)','t_target_y':`${Math.round(haron_total_target)}`,'t_sold_y':`${Math.round(haron_total_sold)}`,'t_achi_y':`${Math.round(haron_total_sold/haron_total_target*100).toFixed(2)}%`,'jan':`${jan_haron}`,'feb':`${feb_haron}`,'mar':`${0}`,'apr':`${0}`,'may':`${0}`,'jun':`${0}`,'jul':`${0}`,'aug':`${0}`,'sep':`${0}`,'oct':`${0}`,'nov':`${0}`,'dec':`${0}`},
    {'name':'Mishkat Ahmed','t_target_y':`${Math.round(mishkat_total_target)}`,'t_sold_y':`${Math.round(mishkat_total_sold)}`,'t_achi_y':`${Math.round(mishkat_total_sold/mishkat_total_target*100).toFixed(2)}%`,'jan':`${jan_mishkat}`,'feb':`${feb_mishkat}`,'mar':`${0}`,'apr':`${0}`,'may':`${0}`,'jun':`${0}`,'jul':`${0}`,'aug':`${0}`,'sep':`${0}`,'oct':`${0}`,'nov':`${0}`,'dec':`${0}`}
];

function myAction(data){

    let table = document.getElementById('tableRow');

    table.innerHTML = '';

    for(let i = 0; i < data.length; i++){

        let row = `<tr>
                      <td data-title="Name" class="sl-color">${data[i].name}</td>
                      <td data-title="T.Target(Yearly)">${data[i].t_target_y}</td>
                      <td data-title="T.Sold(Yearly)">${data[i].t_sold_y}</td>
                      <td data-title="T.Achi%(Yearly)">${data[i].t_achi_y}</td>
                      <td data-title="Jan (T/S/A)">${data[i].jan}</td>
                      <td data-title="Feb (T/S/A)">${data[i].feb}</td>
                      <td data-title="Mar (T/S/A)">${data[i].mar}</td>
                      <td data-title="Apr (T/S/A)">${data[i].apr}</td>
                      <td data-title="May (T/S/A)">${data[i].may}</td>
                      <td data-title="Jun (T/S/A)">${data[i].jun}</td>
                      <td data-title="Jul (T/S/A)">${data[i].jul}</td>
                      <td data-title="Aug (T/S/A)">${data[i].aug}</td>
                      <td data-title="Sep (T/S/A)">${data[i].sep}</td>
                      <td data-title="Oct (T/S/A)">${data[i].oct}</td>
                      <td data-title="Nov (T/S/A)">${data[i].nov}</td>
                      <td data-title="Dec (T/S/A)">${data[i].dec}</td>
                  </tr>`
        table.innerHTML += row;
    }

}
myAction(colleguesDetails);

