import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
	const slug = params.slug;

	const coursesData: Record<string, any> = {
		'autonetics-certified-pg-diploma-in-industrial-automation': {
			title: 'Autonetics Certified PG Diploma in Industrial Automation',
			icon: 'i-ph-certificate-fill',
			theme: 'blue',
			duration: '3 Months',
			image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2000&auto=format&fit=crop',
			sections: [
				{
					title: '1) Autonetics Certified PG Diploma in Industrial Automation',
					items: [
						'Basics of automation',
						'Programmable logic controller',
						'Supervisory control & data acquisition (SCADA)',
						'Human Machine Interface (HMI)',
						'Instrumentation system',
						'Electrical system',
						'Drives',
						'Mechatronics system',
						'Embedded system',
						'Soft skill and interview guidelines'
					]
				},
				{
					title: '2) PLC (Programmable Logic Controller)',
					items: [
						'Introduction to PLC hardware (AB, Siemens, GE Fanuc, ABB, Mitsubishi, Delta)',
						'Architecture of PLC',
						'PLC fundamentals',
						'Information about PLC components',
						'Types of input output',
						'Source sink concepts in PLC',
						'Flag concepts',
						'Wiring Installation concept',
						'Introduction to PLC Programming software',
						'Addressing concepts',
						'Introduction to Byte, bit & word concept',
						'Detail Programming',
						'Timer, counter, block programming',
						'Advanced Instruction',
						'File handling',
						'Upload download & Monitoring',
						'Forcing Input output',
						'Troubleshooting and fault diagnosis of plc',
						'Programming assignments for real time application'
					]
				},
				{
					title: '3) SCADA (Supervisory Control and Data Acquisition)',
					items: [
						'Introduction of SCADA software (Siemens Wincc, Wonderware Intouch)',
						'Applications of SCADA software',
						'Creating database of Tags',
						'Creating and Editing graphics display with animation',
						'Data entry / Start stop command / analog input',
						'Sizing / movement / blinking / visibility / filling',
						'Trending',
						'Script logic writing',
						'Recipe management',
						'Security management',
						'Types of Window',
						'Database connectivity',
						'Communication with PLC',
						'Troubleshooting'
					]
				},
				{
					title: '4) HMI (Human Machine Interface)',
					items: [
						'Introduction to HMI (Siemens)',
						'Interfacing and networking with PLC',
						'Creating screen',
						'Creating Database',
						'Navigation between screen',
						'User input / output display',
						'Function key',
						'Uploading / Downloading application',
						'Dynamic Representation',
						'Alarm',
						'Security',
						'Trends, recipe management'
					]
				},
				{
					title: '5) Instrumentation System',
					items: [
						'Measurement Definition',
						'Classification of Instrumentation',
						'Pressure measurement',
						'Flow measurement',
						'Temperature measurement',
						'Level measurement',
						'All transmitters (2, 3, 4 wire)',
						'Types of control system',
						'PID controller'
					]
				},
				{
					title: '6) Electrical System',
					subsections: [
						{
							subtitle: 'Electrical Fundamental',
							items: [
								'Electrical system Measurements',
								'Electrical parameter Calculations',
								'Principle of AC generation',
								'Front control and switching concept'
							]
						},
						{
							subtitle: 'Switchgear / Protection Device',
							items: [
								'Electrical fault detection',
								'Fuses',
								'MCB / MCCB / ACB',
								'Contactor / OLR / MPCB / ELCB'
							]
						},
						{
							subtitle: 'MOTOR and Starter',
							items: [
								'AC motor types', 'DC motor types', 'Calculation of motor',
								'Starter Principle', 'Direct ON line (DOL)', 'Star Delta circuit',
								'Single phase Motor', 'Split phase', 'Capacitor start',
								'Shaded pole', 'Universal motor'
							]
						},
						{
							subtitle: 'Transformer',
							items: [
								'Basic types of transformer',
								'Generator and characteristic'
							]
						}
					]
				},
				{
					title: '7) Mechatronics System',
					items: [
						'Introduction to Hydraulic and Pneumatic',
						'Basics principle of operation',
						'Various types of Hydraulic and Pneumatic',
						'Block diagram',
						'Single and double acting cylinder',
						'Construction operation and application, maintenance',
						'Troubleshooting and Fault finding of hydraulic system',
						'Actuator',
						'Air compressor',
						'How to check air compressor',
						'Disadvantage of Hydraulic and Pneumatic',
						'Symbols used in Pneumatic',
						'Direction control value'
					]
				},
				{
					title: '8) Embedded System',
					items: [
						'Microcontrollers',
						'System Development concepts',
						'Understanding target board',
						'Understanding microcontroller',
						'Work environment and development guidelines',
						'Interfaces - sensors and modules',
						'Interrupts and timers',
						'Data storage',
						'C programming',
						'Robotics'
					]
				},
				{
					title: '9) Drives',
					items: [
						'Dc Motor', 'Ac Motor', 'Motor Review', 'Loads',
						'Servo Motor', 'Stepper Motor', 'Requirements of Drive',
						'Dc Drives', 'Ac Drives', 'Bypassing', 'User/operator interface'
					]
				}
			]
		},
		'autonetics-certified-automation-engineering': {
			title: 'Autonetics Certified Automation Engineering',
			icon: 'i-ph-factory-fill',
			theme: 'blue',
			duration: '3 Months (With industrial automation experience letter)',
			image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2000&auto=format&fit=crop',
			tags: ['PLC (AB, Mitsubishi, Ge-fanuc)', 'SCADA (Wonderware)', 'Electrical System', 'AutoCAD', 'VFD (Delta)'],
			sections: [
				{
					title: '1) PLC (Programmable Logic Controller)',
					items: [
						'Introduction to PLC hardware (AB, Mitsubishi, Ge-fanuc)',
						'Architecture of PLC',
						'PLC fundamentals',
						'Information about PLC components',
						'Types of input output',
						'Source sink concepts in PLC',
						'Flag concepts',
						'Wiring Installation concept',
						'Introduction to PLC Programming software',
						'Addressing concepts',
						'Introduction to Byte, bit & word concept',
						'Detail Programming',
						'Timer, counter, block programming',
						'Advanced Instruction',
						'File handling',
						'Upload download & Monitoring',
						'Forcing Input output',
						'Troubleshooting and fault diagnosis of plc',
						'Programming assignments for real time application'
					]
				},
				{
					title: '2) SCADA (Supervisory Control and Data Acquisition)',
					items: [
						'Introduction of SCADA software (Wonderware)',
						'Applications of SCADA software',
						'Creating database of Tags',
						'Creating and Editing graphics display with animation',
						'Data entry / Start stop command / analog input',
						'Sizing / movement / blinking / visibility / filling',
						'Trending',
						'Script logic writing',
						'Recipe management',
						'Security management',
						'Types of Window',
						'Database connectivity',
						'Communication with PLC',
						'Troubleshooting'
					]
				},
				{
					title: '3) Electrical System',
					subsections: [
						{
							subtitle: '1. Electrical Fundamental',
							items: [
								'Electrical system Measurements',
								'Electrical parameter Calculations',
								'Principle of AC generation',
								'Front control and switching concept'
							]
						},
						{
							subtitle: '2. Switchgear / Protection Device',
							items: [
								'Electrical fault detection',
								'Fuses',
								'MCB / MCCB / ACB',
								'Contactor / OLR / MPCB / ELCB'
							]
						},
						{
							subtitle: '3. MOTOR and Starter',
							items: [
								'AC motor types', 'DC motor types', 'Calculation of motor',
								'Starter Principle', 'Direct ON line (DOL)', 'Star Delta circuit',
								'Single phase Motor', 'Split phase', 'Capacitor start',
								'Shaded pole', 'Universal motor'
							]
						},
						{
							subtitle: '4. Transformer',
							items: [
								'Basic types of transformer',
								'Generator and characteristic'
							]
						}
					]
				},
				{
					title: '4) Drives (VFD - Delta)',
					items: [
						'Dc Motor', 'Ac Motor', 'Motor Review', 'Loads',
						'Servo Motor', 'Stepper Motor', 'Requirements of Drive',
						'Dc Drives', 'Ac Drives', 'Bypassing', 'User/operator interface'
					]
				}
			]
		},
		'autonetics-certified-plc-programmer': {
			title: 'Autonetics Certified PLC Programmer',
			icon: 'i-ph-desktop-fill',
			theme: 'blue',
			duration: '1 Month',
			image: 'https://images.unsplash.com/photo-1581092921461-39b9d08a9b98?q=80&w=2000&auto=format&fit=crop',
			sections: [
				{
					title: '1) PLC (Programmable Logic Controller)',
					items: [
						'Introduction to PLC hardware (AB, Siemens, GE Fanuc, ABB, Mitsubishi)',
						'Architecture of PLC',
						'PLC fundamentals',
						'Information about PLC components',
						'Types of input output',
						'Source sink concepts in PLC',
						'Flag concepts',
						'Wiring Installation concept',
						'Introduction to PLC Programming software',
						'Addressing concepts',
						'Introduction to Byte, bit & word concept',
						'Detail Programming',
						'Timer, counter, block programming',
						'Advanced Instruction',
						'File handling',
						'Upload download & Monitoring',
						'Forcing Input output',
						'Troubleshooting and fault diagnosis of plc',
						'Programming assignments for real time application'
					]
				}
			]
		},
		'autonetics-certified-electrical-system': {
			title: 'Autonetics Certified Electrical System',
			icon: 'i-ph-lightning-fill',
			theme: 'blue',
			duration: '1.5 Months',
			image: 'https://images.unsplash.com/photo-1487875961445-47a00398c267?q=80&w=2000&auto=format&fit=crop',
			sections: [
				{
					title: '1) Electrical System',
					subsections: [
						{
							subtitle: 'Electrical Fundamental',
							items: [
								'Electrical system Measurements',
								'Electrical parameter Calculations',
								'Principle of AC generation',
								'Front control and switching concept'
							]
						},
						{
							subtitle: 'Switchgear / Protection Device',
							items: [
								'Electrical fault detection',
								'Fuses',
								'MCB / MCCB / ACB',
								'Contactor / OLR / MPCB / ELCB'
							]
						},
						{
							subtitle: 'MOTOR and Starter',
							items: [
								'AC motor types', 'DC motor types', 'Calculation of motor',
								'Starter Principle', 'Direct ON line (DOL)', 'Star Delta circuit',
								'Single phase Motor', 'Split phase', 'Capacitor start',
								'Shaded pole', 'Universal motor'
							]
						},
						{
							subtitle: 'Transformer',
							items: [
								'Basic types of transformer',
								'Generator and characteristic'
							]
						}
					]
				},
				{
					title: '2) Drives',
					items: [
						'Dc Motor', 'Ac Motor', 'Motor Review', 'Loads',
						'Servo Motor', 'Stepper Motor', 'Requirements of Drive',
						'Dc Drives', 'Ac Drives', 'Bypassing', 'User/operator interface'
					]
				}
			]
		},
		'autonetics-certified-mechatronics-system': {
			title: 'Autonetics Certified Mechatronics System',
			icon: 'i-ph-robot-fill',
			theme: 'blue',
			duration: '1 Month',
			image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=2000&auto=format&fit=crop',
			sections: [
				{
					title: '1) Mechatronics System',
					items: [
						'Introduction to Hydraulic and Pneumatic',
						'Basics principle of operation',
						'Various types of Hydraulic and Pneumatic',
						'Block diagram',
						'Single and double acting cylinder',
						'Construction operation and application, maintenance',
						'Troubleshooting and Fault finding of hydraulic system',
						'Actuator',
						'Air compressor',
						'How to check air compressor',
						'Disadvantage of Hydraulic and Pneumatic',
						'Symbols used in Pneumatic',
						'Direction control value'
					]
				}
			]
		},
		'autonetics-certified-scada-developer': {
			title: 'Autonetics Certified SCADA Developer',
			icon: 'i-ph-chart-line-up-fill',
			theme: 'blue',
			duration: '1.5 Months',
			image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2000&auto=format&fit=crop',
			sections: [
				{
					title: '1) SCADA (Supervisory Control and Data Acquisition)',
					items: [
						'Introduction of SCADA software (Wincc Flexible, Wonderware Intouch)',
						'Applications of SCADA software',
						'Creating database of Tags',
						'Creating and Editing graphics display with animation',
						'Data entry / Start stop command / analog input',
						'Sizing / movement / blinking / visibility / filling',
						'Trending',
						'Script logic writing',
						'Recipe management',
						'Security management',
						'Types of Window',
						'Database connectivity',
						'Communication with PLC',
						'Troubleshooting'
					]
				}
			]
		},
		'autonetics-certified-embedded-system-designer': {
			title: 'Autonetics Certified Embedded System Designer',
			icon: 'i-ph-cpu-fill',
			theme: 'blue',
			duration: '2 Months',
			image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop',
			sections: [
				{
					title: '1) Simulation Software',
					items: [
						'Introduction to Proteus (Installation)',
						'Tools and analysis',
						'Simulation',
						'Editing libraries'
					]
				},
				{
					title: '2) Arduino IDE',
					items: [
						'Installation & Basic Information',
						'Driver Configuration',
						'Coding & uploading code'
					]
				},
				{
					title: '3) Getting Started (Digital I/O)',
					items: [
						'LED blinking (digital output)',
						'Digital input interfacing',
						'Pull up / pull down concept',
						'Debounce and Precautions'
					]
				},
				{
					title: '4) Digital Sensors',
					items: [
						'IR sensors',
						'Ultrasonic sensor'
					]
				},
				{
					title: '5) Analog Sensors',
					items: [
						'Calculations and configurations',
						'Light dependent sensors',
						'Positive temperature coefficient sensor',
						'Negative temperature coefficient sensor'
					]
				},
				{
					title: '6) Temperature Sensors',
					items: [
						'LM34', 'LM35', 'DHT 11',
						'Flex sensor', 'PIR sensor', 'Moisture sensor'
					]
				},
				{
					title: '7) Serial Analog & PWM',
					items: [
						'Analog to Digital converter',
						'Analog write (PWM as DAC converter)',
						'AC/DC light dimmer',
						'DC motor speed control',
						'AC motor speed control',
						'Servo motor speed control',
						'Light intensity control using LDR & POT'
					]
				},
				{
					title: '8) Motor Control',
					items: [
						'Using Transistor',
						'Using IC',
						'Using Relay'
					]
				},
				{
					title: '9) Display Interfacing',
					items: [
						'GLCD interfacing and custom characters',
						'Seven segment display',
						'16x2 display',
						'16x4 display',
						'20x4 display'
					]
				},
				{
					title: '10) Communication & Robotics',
					items: [
						'GSM Interfacing',
						'PC control automation',
						'Bluetooth Robot'
					]
				}
			]
		},
		'advanced-microcontroller': { title: 'Advanced Microcontroller', icon: 'i-ph-cpu-fill', theme: 'indigo' },
		'embedded-professional': { title: 'Embedded Professional', icon: 'i-ph-laptop-fill', theme: 'indigo' },
		'languages': { title: 'Languages', icon: 'i-ph-code-fill', theme: 'indigo' },
		'microcontroller': { title: 'Microcontroller', icon: 'i-ph-cpu-fill', theme: 'indigo' },
		'pcb-designing': { title: 'PCB Designing', icon: 'i-ph-bounding-box-fill', theme: 'indigo' }
	};

	const course = coursesData[slug];

	if (!course) {
		throw error(404, 'Course not found');
	}

	return { course };
};
