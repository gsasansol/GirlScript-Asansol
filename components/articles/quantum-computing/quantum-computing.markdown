# **Introduction to Quantum Bits & Quantum Computing**

## Qubit

A Qubit can be defined as the most fundamental piece of information in
quantum computing, and the quantum computing equivalent of a binary bit,
used in classical computers. Quantum computers make use of the concept
of quantum superposition to arrive at the states/values held by a qubit,
hence making it relevant to understand quantum superpositioning briefly.

### Quantum Superpositioning:

![](components/articles/quantum-computing/assets/image1.gif){width="6.5in"
height="3.6944444444444446in"}

The above video illustration gives an overview of how quantum
superposition can be understood to occur. A qubit can exist as a 1
**AND** a 0, rather than 1 **OR** 0 like in a bit. Until a measurement
of the state takes place, to determine the value/state of a qubit, its
value is both, 1 and 0, through the concept of quantum superposition.
This allows a qubit to hold multiple values, rather than a single value,
allowing for faster, and larger computations.

Quantum superpositioning is prevalent throughout nature and can be
observed in natural computations such as chemical reactions, which are
intrinsically fast due to the quantum superpositioning taking place at a
subatomic level.

### Qubit Life-Cycle

Now that we realize qubits use quantum superposition to be in between
two states of 1 and 0 and are not just a definite 1 or a 0 like a
classical binary bit, let's represent this mathematically. **Consider a
pure qubit \|ψ⟩. It is represented by the linear combination of two
basis states 1 and 0.** (Let's represent the basis states as \|1⟩ and 0⟩
respectively)

\|ψ⟩ = α \|0⟩ + β \|1⟩, where α, β ∈ \[0,1\], such that \|α\|² + \|β\|²
= 1

Since it can be observed that α and β have values between \[0,1\], they
can take an infinite number of values, with the values corresponding to
a unit circle, and including real values. Consequently, a qubit too can
take an infinite number of values due to this. Hence, it becomes
necessary to switch to Vector Spaces to further our discussion of the
qubit.

A simple qubit life cycle can be broken down into three overarching
steps as follows:

1.  On initialization of a qubit, it either starts in one of the pure
    > \|0⟩ or \|1⟩ state. It is then subjected to superpositioning
    > through the usage of a quantum gate/operation.

2.  All computation is then carried out in this superpositioned
    > (combination of the above two pure states) state.

3.  On completion of the computation, we measure them back into one of
    > the original basic states of \|0⟩ or \|1⟩ from step 1.

It is in the 3rd step that we introduce measuring the qubit. When the
qubit is measured, in accordance with the principles of quantum
superpositioning, it lands up in one of the possible basis vector states
of \|0⟩ or \|1⟩. The probability of the qubit having a certain basis
the state is equal to the square of the coefficient of the state as shown
below.

P(\|ψ⟩ = \|0⟩) =γ²

P(\|ψ⟩ = \|1⟩) =δ²

![](components/articles/quantum-computing/assets/image3.png){width="6.5in"
height="1.5in"}

## 

## Qubit vs Bit

Modern classical computers make use of the Binary bit as their
fundamental piece of information. A bit is binary in nature, consisting of
only two values, 1 and 0. Based on the same switch logic as those of
logic gates, bits combine their values of 1 and 0s as a group and carry
out various operations of representing, conveying, and manipulating data.
Bits are slow and multiple bits are required to complete the simplest
equations on a classical computer.

A Qubit, on the other hand, is the basic unit of quantum computing or
quantum information. It is to quantum computers and computing, what the
A bit is to classical computers and computation.

At any given moment, a bit holds only one value and it is possible to
fully encode one bit into one qubit. However, the implementation of the
qubit allows it to store more information, such as two bits using
superdense coding.

This is achieved through the application of quantum superposition, which
allows for a coherent superposition of both states, allowing the value
to exist as a 1 or a 0 until the state is measured. On measuring the
state of a qubit, the superposition is disturbed, which is unlike a bit
, where the state remains undisturbed on observance/measurement.

> ![](components/articles/quantum-computing/assets/image2.png){width="5.765625546806649in"
> height="3.170135608048994in"}

## Advantages of Quantum Computing over Classical Computing

The power of Quantum computing over classical computing and computers
lies in the application of the superpositioning concept by quantum
computation as discussed earlier.

Let's consider two systems, System A with 2 bits, and System B with 2
qubits.

System A can represent 4 different values, with 4 possible states of
\[00, 01, 10, 11\]. The particular state value for this system would be
2⁰ bit0 + 2¹ bit1 . i.e. particular state-value ∈ {0,1,2,3}, one of the
4 possible values. Now, consider System B. System B can represent
**infinite different values formed from 4 different basis states**,00
≡**\|00⟩**, 01 ≡ **\|01⟩**, 10 ≡ **\|10⟩**, 11 ≡**\|11⟩**. The possible
states being infinite, the particular state value is α \|00⟩ + β \|01⟩ +
γ \|10⟩ + δ \|11⟩, such that ***\|*α\|²+\|β\|² +\|γ\|² +\|δ\|² = 1**.

The key difference arises in the fact that System A requires knowing 2
values, bit0, and bit1, in order to understand its states. On the other
hand, System B requires knowing 4 values α, β, γ, δ. The implication of
this is addressed by the following excerpt:

An n-bit classical system can be in one of the 2\^n possible states at a
time and all it needs is the value of these **n bits to be fully
recognized**

**VS**

An n-qubit system can be in **superposition** of all of those states 2\^n
states at a given time and it needs the value of coefficients of all of
the **2\^n states basis to be fully recognized**.

**Note: To be more precise it is 2\^n -1, considering the summation to 1
constraint.**

Thus, because of the existence of superposition in the qubit system B,
up to 2\^n bit information can be stored in comparison to n-bit
information in the classical bit system of classical computation. This
fact is what gives Quantum Computers all their advantages over classical
computers, and allows it to achieve larger and faster computations than
classical computers.

## Problems that Quantum Computing can solve

There are many potential applications of quantum computing, some of
which are:

-   Quantum computing will very definitely make its mark felt in the
    > **Encryption and Information Security** domain. RSA encryption has
    > been quite reliable in encrypting large amounts of the world's
    > data. However, a quantum computer could break RSA encryption with
    > quite ease using Shor's algorithm. To address this, there has been
    > discussion and initiative regarding using quantum computation to
    > come up with more secure encryption methodologies.

-   The domain of **Drug research and development** is a crucial
    > applicable area for quantum computing. Drug testing and
    > development involves computing various possibilities for variables
    > within a chemical formula, which can be done faster and for larger
    > datasets by a quantum computer, in comparison to classical
    > computers.

-   **Financial models** of financial markets depend on large amounts of
    > datasets, and unrelenting amounts of variables and fluctuations.
    > The usage of quantum computers, which can handle very large
    > datasets and variability, can perhaps bring legibility to
    > financial market modeling and forecasts.

## Quantum computers/technologies already in use (2022)

-   IBM Quantum leads the world in quantum computing. This nascent
    > technology is widely expected to solve valuable problems that
    > today's most powerful classical supercomputers cannot solve and
    > never will.

-   D-Wave Systems Inc. is a Canadian quantum computing company, based
    > in Burnaby, British Columbia, Canada. D-Wave was the world\'s
    > first company to sell computers to exploit quantum effects in
    > their operation.

-   Azure Quantum is the cloud quantum computing service of Azure, with
    > a diverse set of quantum solutions and technologies. Azure Quantum
    > ensures an open, flexible, and future-proofed path to quantum
    > computing that adapts to your way of working, accelerates your
    > progress, and protects your technology investments.

## Future scope and possibilities

With the growth in the population and growing demands for energy and
resources in the world, quantum computing can be used to arrive at more
efficient ways to harness and distribute resources across the world.
The application of quantum computing to nonlinear problems makes it a
potential game-changer for fields like cryptography, chemistry, material
science, agriculture, and pharmaceuticals once the technology is more
mature. It also helps in issues pertaining to complex mathematical
models.

Quantum computation isn't suitable for all problems, it can help solve
various issues in the future for which classical computers fall short.
However, the list of potential applications seems to be growing, with
protein modeling one of the newest scopes in the post-COVID-19 period.

A good resource for learning quantum computing, its algorithms and
programming in quantum computation:

[[Resource]{.ul}](https://medium.com/@adubey40/quantum-computing-101-1ed742540ba2)
(has been used as one of the references for this article as well)
