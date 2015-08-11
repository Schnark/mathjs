var assert = require('assert');
var approx = require('../../../tools/approx');
var math = require('../../../index');

describe('physical constants', function() {

  it('should return the correct value and unit for physical constants', function () {
    // NOte: to keep these unit tests readable and compact, the toString() of the units is compared

    // Universal constants
    assert.equal(math.speedOfLight.toString(),         '2.99792458e+8 m / s');
    assert.equal(math.gravitationConstant.toString(),  '6.673848e-11 m^3 / (kg s^2)');
    assert.equal(math.planckConstant.toString(),       '6.626069311e-34 J s');
    assert.equal(math.reducedPlanckConstant.toString(),'1.05457172647e-34 J s');

    // Electromagnetic constants
    assert.equal(math.magneticConstant.toString(),          '1.2566370614e-6 N / A^2');
    assert.equal(math.electricConstant.toString(),          '8.854187817e-12 F / m');
    assert.equal(math.vacuumImpedance.toString(),           '376.730313461 ohm');
    assert.equal(math.coulomb.toString(),                   '8.987551787368176e+9 (N m^2) / C^2');
    assert.equal(math.elementaryCharge.toString(),          '160.217656535 zC');
    assert.equal(math.bohrMagneton.toString(),              '9.274009682e-24 J / T');
    assert.equal(math.conductanceQuantum.toString(),        '77.48091734625 uS');
    assert.equal(math.inverseConductanceQuantum.toString(), '12.906403721741999 kohm'); // round-off error
    assert.equal(math.magneticFluxQuantum.toString(),       '0.0050507835311000004 yWb');
    assert.equal(math.nuclearMagneton.toString(),           '5.0507835311e-27 J / T');
    assert.equal(math.klitzing.toString(),                  '25.812807443483997 kohm'); // round-off error
    //assert.equal(math.josephson.toString(),                 '4.8359787011e-14 Hz V^-1');  // TODO: support for Hz needed

    // Atomic and nuclear constants
    assert.equal(math.bohrRadius.toString(),              '52.917721092170005 pm'); // round-off error
    assert.equal(math.classicalElectronRadius.toString(), '2.817940326727 fm');
    assert.equal(math.electronMass.toString(),            '9.109382913999999e-4 yg');
    assert.equal(math.fermiCoupling.toString(),           '1.1663645e-5 GeV^-2');
    approx.equal(math.fineStructure.toString(),           7.297352569824e-3);
    assert.equal(math.hartreeEnergy.toString(),           '4.3597443419 aJ');
    assert.equal(math.protonMass.toString(),              '1.6726217777400003 yg'); // round-off error
    assert.equal(math.deuteronMass.toString(),            '3.3435830926000008 yg'); // round-off error
    assert.equal(math.neutronMass.toString(),             '1.6749271613 yg');
    assert.equal(math.quantumOfCirculation.toString(),    '3.636947552024e-4 m^2 / s');
    assert.equal(math.rydberg.toString(),                 '1.097373156853955e+7 m^-1');
    assert.equal(math.thomsonCrossSection.toString(),     '6.65245873413e-29 m^2');
    approx.equal(math.weakMixingAngle.toString(),         0.222321);
    approx.equal(math.efimovFactor.toString(),            22.7);

    // Physico-chemical constants
    assert.equal(math.atomicMass.toString(),          '1.6605389217299997 yg'); // round-off error
    assert.equal(math.avogadro.toString(),            '6.0221412927e+23 mol^-1');
    assert.equal(math.boltzmann.toString(),           '1.380648813e-23 J / K');
    assert.equal(math.faraday.toString(),             '96485.336521 C / mol');
    assert.equal(math.firstRadiation.toString(),      '3.7417715317e-16 W m^2');
    assert.equal(math.loschmidt.toString(),           '2.686780524e+25 m^-3');
    assert.equal(math.gasConstant.toString(),         '8.314462175 J / (K mol)');
    assert.equal(math.molarPlanckConstant.toString(), '3.990312717628e-10 (J s) / mol');
    assert.equal(math.molarVolume.toString(),         '2.24139682e-10 m^3 / mol');
    approx.equal(math.sackurTetrode.toString(),       -1.164870823);
    assert.equal(math.secondRadiation.toString(),     '0.01438777013 m K');
    assert.equal(math.stefanBoltzmann.toString(),     '5.67037321e-8 W / (m^2 K^4)');
    assert.equal(math.wienDisplacement.toString(),    '0.002897772126 m K');
    // assert.equal(math.spectralRadiance.toString(),   '1.19104286953e-16 W m^2 sr^-1'); // TODO spectralRadiance

    // Adopted values
    assert.equal(math.molarMass.toString(),         '0.001 kg / mol');
    assert.equal(math.molarMassC12.toString(),      '0.0012 kg / mol');
    assert.equal(math.gravity.toString(),           '9.80665 m / s^2');

    // Natural units
    assert.equal(math.planckLength.toString(),      '1.6161999700000003e-11 ym'); // round-off error
    assert.equal(math.planckMass.toString(),        '21.765113 ug');
    assert.equal(math.planckTime.toString(),        '5.3910632000000007e-20 ys'); // round-off error
    assert.equal(math.planckCharge.toString(),      '1.8755459564099999 aC');
    assert.equal(math.planckTemperature.toString(), '1.41683385e+32 K');

  });

});
