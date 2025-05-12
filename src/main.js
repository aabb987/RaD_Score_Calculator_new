import { arm_weapon_ranged } from './data_folder/units_data.js';
import { arm_weapon_melee } from './data_folder/units_data.js';
import { back_weapon } from './data_folder/units_data.js';
import { back_weapon_shield } from './data_folder/units_data.js';
import { parts_head } from './data_folder/units_data.js';
import { parts_body } from './data_folder/units_data.js';
import { parts_hand } from './data_folder/units_data.js';
import { parts_leg } from './data_folder/units_data.js';
import { booster } from './data_folder/units_data.js';
import { fire_control_system } from './data_folder/units_data.js';
import { generators } from './data_folder/units_data.js';
import { OS_extension } from './data_folder/units_data.js';



document.getElementById("calculate-score").addEventListener("click", function () {
    let totalScore = 0;
    const selects = document.querySelectorAll("select");
    selects.forEach(select => {
        const selectedOption = select.options[select.selectedIndex];
        if (selectedOption && selectedOption.value !== "default") {
            const selectedItem = [...arm_weapon_ranged, ...arm_weapon_melee, ...back_weapon, ...back_weapon_shield, ...parts_head, ...parts_body, ...parts_hand, ...parts_leg, ...booster, ...fire_control_system, ...generators].find(item => item.id === selectedOption.value);
            if (selectedItem) {
                console.log("Selected Option Value:", selectedOption.value);
                console.log("Selected Item:", selectedItem);
                totalScore += parseInt(selectedItem.score);
            }
        }
    });
    document.getElementById("total-score").textContent = "Total Score: " + totalScore;
});

document.getElementById




// 各個下拉式選單的呼叫地方


function unitSelect(selectId, dataArray) {
    const selectElement = document.getElementById(selectId);
    if (!selectElement) {
        console.error(`Select element with id "${selectId}" not found.`);
        return;
    }

    // 清空現有選項
    selectElement.innerHTML = '<option value="default" disabled selected>Select a weapon</option>';

    // 動態添加選項
    dataArray.forEach(item => {
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.name;
        option.dataset.src = item.src; // Add the src as a data attribute
        selectElement.appendChild(option);
    });

    // Add an event listener to update the image when an option is selected
    selectElement.addEventListener("change", function () {
        const selectedOption = selectElement.options[selectElement.selectedIndex];
        const imageElement = document.getElementById(`${selectId}-image`);
        if (imageElement && selectedOption.dataset.src) {
            imageElement.src = selectedOption.dataset.src;
        } else {
            console.error(`Image element with id "${selectId}-image" not found or src not set.`);
        }
    });
}


unitSelect("melee-weapon-select-left-arm", arm_weapon_melee);

unitSelect("ranged-weapon-select-left-arm", arm_weapon_ranged);

unitSelect("ranged-weapon-select-right-arm", arm_weapon_ranged);

unitSelect("melee-weapon-select-left-back", arm_weapon_melee);

unitSelect("ranged-weapon-select-left-back", arm_weapon_ranged);

unitSelect("back-weapon-select-left-back", back_weapon);

unitSelect("back-weapon-shield-select-left-back", back_weapon_shield);

unitSelect("ranged-weapon-select-right-back", arm_weapon_ranged);

unitSelect("back-weapon-select-right-back", back_weapon);

unitSelect("parts-head-select", parts_head);

unitSelect("parts-body-select", parts_body);

unitSelect("parts-hand-select", parts_hand);

unitSelect("parts-leg-select", parts_leg);

unitSelect("booster-select", booster);

unitSelect("fire-control-system-select", fire_control_system);

unitSelect("generators-select", generators);

unitSelect("OS_extension-select", OS_extension);

