import { React, useEffect, useState } from "react"
import Konva from "konva"
var stage
var layer

export const Genplan = () => {
	const [hovered, setHovered] = useState(false)

	const paths = [
		{
			name: 'paths_plan1',
			liter: 'milenium',
			// condition: 1,
			path: 'M378.3,268.4 408.2,293.3 461.3,588.4 347.6,627.3 352,647.1 352,647.9 290.5,668.7 291.3,670.9 248.5,685.2 254.4,708 195.5,728.1 179.2,726.5 171.6,711 159.7,714.3 140.6,666.3 140.6,663.5 141.8,663.5 139.9,659.4 139.9,658 136.4,650.9 136.4,646.4 134.8,641.2 134.8,639.9 132.3,636.1 132.3,630.4 128.6,615.8 125.2,607.6 125.2,604.6 122.6,602 122.6,593.3 118.6,585.4 118.6,576.1 114.8,569.5 114.8,562 106.8,536.6 107.6,536.6 107.6,533.2 103.1,523.6 103.1,515.9 98.5,506.1 98.5,497 92.4,480 92.4,477.2 89.3,470.6 89.3,467.9 90.4,469.3 90.4,466.1 84.5,452.9 84.5,451 85.8,451 85.8,448.8 80.3,436.4 80.3,433.8 81.3,433.8 81.3,431.7 76.5,420.4 76.5,417.9 77.2,417.9 77.2,414.2 74.3,405.6 74.3,403.5 71.4,396.4 66.8,377 78.4,374.6 76.6,368.1 76.6,364.3 112.6,356 112.6,353.7 154.7,344.1 155.7,346.6 182.5,341.4 182.5,338.4 209.7,332.6 209.7,328.7 206.4,324.9 202.4,304.9 207.9,303.8 206.5,296.8 231.8,291.8 231.7,289.4 274.4,281.1 276.5,282.5 299.1,278.3 299.1,275.5 341.9,267.1 343.8,269.1 364.9,265 369.9,269.7 z',

			// sdacha: "2 кв. 2021",
			// sdacha: "Сдан",
		},
		{
			name: 'paths_plan2',
			liter: 'central',
			// condition: 1,
			path: 'M711.6,291.1 743.2,308.3 745.8,329.4 736.8,331.3 738.4,342.5 742.4,341.1 745.8,343.8 777.9,623.2 732.5,639 732.2,641.6 681.1,660.1 616.2,660.1 559.2,604.2 559.2,595.9 560.8,595.9 561.1,591.6 556.3,587.4 556,580.4 557,579.8 557,575.5 553.4,572.3 553.4,565.6 554.6,565.6 554.6,560.9 551.1,557.4 551.1,550.6 553.4,550.6 553.4,546.7 548.3,541.5 548.3,535.4 550.9,534.7 550.9,531.1 546.5,526.7 545.9,526.1 545.9,519.9 546.9,519.6 546.9,514.8 543.8,511.6 543.8,504.5 544.7,504.5 544.7,498.9 541.4,495.6 541.4,488.7 543.7,488.7 543.7,484.9 538.7,479.9 538.7,473.5 540.8,473.5 540.8,469.2 535.5,463.9 535.5,457.8 536.4,457.8 536.4,451.5 533.6,448.6 533.6,442.3 536,441.4 536,437.3 531.3,432.6 531.3,426 531.3,419.3 528.4,416.5 528.4,403 525.9,400.5 525.9,394.1 528.2,394.1 528.2,388.6 523.6,384.1 523.6,377.8 525.8,376.8 525.8,371.8 521.6,367.6 521.6,361.6 523.4,360.9 523.4,355.7 518.3,350.6 515.3,330 527.4,327.6 527.4,321.6 562.8,313.9 562.8,308.9 568.1,308.3 568.1,305.4 581.2,303 581.2,298.6 596.2,296 596.2,292.3 623.3,286.1 626.6,288 644.5,284.3 652.7,289.3 662,287.7 679.4,298 z',

			// sdacha: "2 кв. 2021",
			// sdacha: "Сдан",
		},
		{
			name: 'paths_plan3',
			liter: 'forest',
			// condition: 1,
			path: 'M898.5,285.9 916,282.1 916,279.1 951.1,270.7 956.2,272.3 971.2,268.9 971.2,265.7 1006.2,258.2 1010.6,259.6 1026.9,255.8 1039.7,261 1046.2,259.4 1111.4,284.9 1111.4,289.2 1118.1,292.4 1127.3,581 1096.8,592.7 1100,675 1005.6,717 999.2,713.8 966.8,728.8 930.9,706.7 923.6,709.6 921.4,681 868.8,641.5 842.3,352 869.4,345.4 869,341.6 901.5,333.9 901.7,331.3 906.8,329.9 907,326.1 900.9,322.3 900.9,316.3 904.9,314.9 904.9,309.8 899.9,307 z',

			// sdacha: "2 кв. 2021",
			// sdacha: "Сдан",
		},
	]
	const mouseEnter = (e) => {
		setHovered(e.target.attrs.liter)
		console.log('enter')
		const container = e.target.getStage().container();
		container.style.cursor = "pointer"
	}
	const mouseLeave = (e) => {
		const container = e.target.getStage().container();
		container.style.cursor = "default"
		setHovered(false)
	}

	const contHover = (e) => {
		setHovered(parseInt(e.target.getAttribute('data-liter')))
	}
	const contLeave = (e) => {
		setHovered(false)
	}

	const contClick = (e) => {
		const liter = e.target.getAttribute('data-liter')
		if (liter != null) {
			document.querySelector('.popup_rgba').style.display = "block"
			document.querySelectorAll('.popup_rgba img').forEach((el) => {
				if (el.getAttribute('src') == null && el.getAttribute('data-src') != null) {
					el.setAttribute('src', el.getAttribute('data-src'))
				}
			})
			document.querySelectorAll(".popup_main").forEach((el) => el.style.display = "none")
			document.querySelector(".popup_main.pu_liter").style.display = "block"
			document.querySelectorAll(".popup_main.pu_liter .pu_floor_img").forEach((el) => {
				el.style.display = "none"
			})
			document.querySelector(".popup_main.pu_liter .pu_floor_img[data-liter='" + liter + "']").style.display = "block"
			/* [data-section='1'] */

			document.querySelector("body").classList.add("overflow")
			document.querySelector(".popup_main.pu_liter .pu_tm i").innerHTML = liter
			let sdachca
			paths.forEach(path => {
				if (path.liter == liter) {
					sdachca = path.sdacha
				}
			})
			document.querySelector(".popup_main.pu_liter .renting_date").innerHTML = sdachca
			let sections = parseInt(document.querySelectorAll(".popup_main.pu_liter .pu_floor_img[data-liter='" + liter + "']")[document.querySelectorAll(".popup_main.pu_liter .pu_floor_img[data-liter='" + liter + "']").length - 1].getAttribute('data-section'))
			let i = 0
			document.querySelectorAll('.pu_entrance span').forEach((el) => {
				if (i < sections) {
					el.style.display = "block"
				} else {
					el.style.display = "none"
				}
				if (i == 0) el.classList.add('act')
				else el.classList.remove('act')
				i++
			})
		}
	}

	const caseLiter = (liter) => {
		switch (liter) {
			case "milenium":
				return "МИЛЛЕНИУМ"
			case "central":
				return "ЦЕНТРАЛ ПАРК"
			case "forest":
				return "ФОРЕСТ"
		}
	}



	useEffect(() => {
		var stageWidth = 1920;
		var stageHeight = 967;
		stage = new Konva.Stage({
			container: 'paths_plan',
			width: stageWidth,
			height: stageHeight,
		});
		layer = new Konva.Layer();
		stage.add(layer)
		paths.map((el) => {
			var path = new Konva.Path({
				opacity: 0.7,
				data: el.path,
				fill: hovered == el.liter ? el.condition == 2 ? 'yellow' : '#f5dd5a' : 'transparent',
				scaleX: 1,
				scaleY: 1
			});
			path.on('mouseenter', function (e) {
				var fill = el.condition == 2 ? 'green' : '#f5dd5a';
				this.fill(fill);
				layer.draw();
				setHovered(el.liter)
				const container = e.target.getStage().container();
				container.style.cursor = "pointer"
			})
			path.on('mouseleave', function (e) {
				var fill = 'transparent';
				this.fill(fill);
				layer.draw();
				setHovered(false)
				const container = e.target.getStage().container();
				container.style.cursor = "default"
			})
			path.on('click', function () {
				const liter = el.liter
				document.querySelector('.popup_rgba').style.display = "block"
				document.querySelectorAll(".popup_main").forEach((el) => el.style.display = "none")
				document.querySelector(".popup_main.pu_liter").style.display = "block"
				document.querySelectorAll(".popup_main.pu_liter .pu_floor_img").forEach((el) => {
					el.style.display = "none"
				})
				document.querySelector("body").classList.add("overflow")
				document.querySelector('.pu_liter .pu_tm b').innerText = caseLiter(liter)
				document.querySelectorAll('.sel_fl_el').forEach((fl) => {
					fl.classList.remove('act')
				})
				//document.querySelector('.sel_fl_el.fl_7').classList.add('act')
				document.querySelectorAll('.floor_img').forEach((floor) => {
					floor.style.display = "none"
				})

				document.querySelectorAll('.pu_liter .liter_img').forEach((el) => {
					el.style.display = "none"
				})
				document.querySelector('.pu_liter .liter_img[data="' + liter + '"]').style.display = "block"
				if (liter == "central") {
					document.querySelector('.entrance_list').style.display = "none"
				} else {
					document.querySelector('.entrance_list').style.display = "flex"
				}
				document.querySelector('.pu_liter').setAttribute('liter', liter)
				document.querySelectorAll('.entr_in').forEach((el) => {
					el.classList.remove('act')
				})
				document.querySelector('.entr_in').classList.add('act')
				if (liter == "forest") {
					document.querySelector('#plan_types').style.display = "block"
				} else {
					document.querySelector('#plan_types').style.display = "none"
				}
				//document.querySelector('.floor_img.l' + liter + "_e7").style.display = "inline-block"
			})
			path.on('touchstart', function () {
				const liter = el.liter
				document.querySelector('.popup_rgba').style.display = "block"
				document.querySelectorAll(".popup_main").forEach((el) => el.style.display = "none")
				document.querySelector(".popup_main.pu_liter").style.display = "block"
				document.querySelectorAll(".popup_main.pu_liter .pu_floor_img").forEach((el) => {
					el.style.display = "none"
				})
				document.querySelector("body").classList.add("overflow")
				document.querySelector('.pu_liter .pu_tm b').innerText = caseLiter(liter)
				document.querySelectorAll('.sel_fl_el').forEach((fl) => {
					fl.classList.remove('act')
				})
				//document.querySelector('.sel_fl_el.fl_7').classList.add('act')
				document.querySelectorAll('.floor_img').forEach((floor) => {
					floor.style.display = "none"
				})
				document.querySelectorAll('.pu_liter .liter_img').forEach((el) => {
					el.style.display = "none"
				})
				document.querySelector('.pu_liter .liter_img[data="' + liter + '"]').style.display = "block"
				if (liter == "central") {
					document.querySelector('.entrance_list').style.display = "none"
				} else {
					document.querySelector('.entrance_list').style.display = "flex"
				}
				document.querySelector('.pu_liter').setAttribute('liter', liter)
				document.querySelectorAll('.entr_in').forEach((el) => {
					el.classList.remove('act')
				})
				document.querySelector('.entr_in').classList.add('act')
				if (liter == "forest") {
					document.querySelector('#plan_types').style.display = "block"
				} else {
					document.querySelector('#plan_types').style.display = "none"
				}
				//document.querySelector('.floor_img.l' + liter + "_e7").style.display = "inline-block"
			})
			layer.add(path)
		})
		layer.draw()

		function fitStageIntoParentContainer() {
			var container = document.querySelector('#paths_plan');
			var containerWidth = container.offsetWidth;
			var scale = containerWidth / stageWidth;
			stage.width(stageWidth * scale);
			stage.height(stageHeight * scale);
			stage.scale({ x: scale, y: scale });
			stage.draw();
		}

		fitStageIntoParentContainer();
		// adapt the stage on any window resize
		window.addEventListener('resize', fitStageIntoParentContainer);
	})

	const literPlClick = (event) => {
		event.preventDefault()
		const liter = parseInt(event.currentTarget.getAttribute('data'))
		document.querySelector('.popup_rgba').style.display = "block"
		document.querySelectorAll(".popup_main").forEach((el) => el.style.display = "none")
		document.querySelector(".popup_main.pu_liter").style.display = "block"
		document.querySelectorAll(".popup_main.pu_liter .pu_floor_img").forEach((el) => {
			el.style.display = "none"
		})
		document.querySelector("body").classList.add("overflow")
		document.querySelector('.pu_liter .pu_tm span').innerText = document.querySelector('.pu_liter .pu_tm span').innerText.split('№')[0] + "№" + liter
		document.querySelectorAll('.sel_fl_el').forEach((fl) => {
			fl.classList.remove('act')
		})
		document.querySelector('.sel_fl_el.fl_7').classList.add('act')
		document.querySelectorAll('.floor_img').forEach((floor) => {
			floor.style.display = "none"
		})
		//document.querySelector('.floor_img.l' + liter + "_e7").style.display = "inline-block"

	}


	return (
		<section class="genplan" style={{ display: "block" }}>
			<div className="cw_main">
				<div className="tm">
					Посмотрите планировки <br /> и <span><l>узнайте цены</l></span>
				</div>
			</div>

			<div class="svg_scroll">
				<div class="svg_wrap">
					<img src="images/genplan.jpg" className="genplan_main_img" />
					<div id="paths_plan"></div>
				</div>
			</div>

			<div className="select_corp">
				<img src="/images/sel_corp_img.svg" />
				<span>Выберите корпус чтобы посмотреть планировки</span>
			</div>



		</section>
	)
}